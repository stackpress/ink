<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  //define handlers
  const handlers = {
    init: () => {
      const on = this.hasAttribute('on');
      this.classList.remove(...(on ? inactiveList : activeList));
      this.classList.add(...(on ? activeList : inactiveList));
      //find all the content elements that this tab controls
      //and either show or hide it based on the active state
      Array.from(document.querySelectorAll(selector)).forEach(content => {
        content.style.display = on ? 'block' : 'none';
      });
    },
    activate: () => {
      //find all the tabs in the same group and remove the active class
      Array.from(document.querySelectorAll(`[group="${group}"]`)).forEach(tab => {
        //remember each tab is a InkComponent...
        //so we can get the selector using the props property
        const subselector = tab.getAttribute('selector');
        //if same selector
        if (selector === subselector && !tab.hasAttribute('on')) {
          //set this tab active
          tab.setAttribute('on', '');
          //find all the content elements that this tab controlsand show it
          Array.from(document.querySelectorAll(selector)).forEach(content => {
            content.style.display = 'block';
          });
          //render the tab, if we can.
          typeof tab.render === 'function' && tab.render();
        //not the same selector
        } else if (selector !== subselector && tab.hasAttribute('on')) {
          //remove active state
          tab.removeAttribute('on');
          //find all the content elements that this tab controls
          Array.from(document.querySelectorAll(subselector)).forEach(content => {
            //hide the content
            content.style.display = 'none';
          });
          //render the tab, if we can.
          typeof tab.render === 'function' && tab.render();
        }
      });
    }
  };
  //get props
  const { 
    group, 
    selector = '',
    active = '',
    inactive = '',
    //dont need these
    style, 'class': _,
    //get the rest
    ...attributes 
  } = this.props;
  const activeList = active.split(' ');
  const inactiveList = inactive.split(' ');
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //default styles
  styles.add(':host', 'cursor', 'pointer');
  styles.add('a', 'display', 'block');
  styles.add('a', 'height', '100%');
  styles.add('a', 'width', '100%');
</script>
<a {...attributes} click={handlers.activate} mount={handlers.init}>
  <slot></slot>
</a>