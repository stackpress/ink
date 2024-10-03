<script>
  //panels are this component's direct children
  const panels = this.originalChildren;
  //panel sections
  const section = {
    main: panels.find(panel => panel.nodeName === 'MAIN'),
    head: panels.find(panel => panel.nodeName === 'HEADER'),
    foot: panels.find(panel => panel.nodeName === 'FOOTER'),
    left: panels.find(panel => panel.nodeName === 'ASIDE' && panel.hasAttribute('left')),
    right: panels.find(panel => panel.nodeName === 'ASIDE' && panel.hasAttribute('right'))
  };
  //states
  const show = { left: false, right: false };
  //this can be accessed by other components like this
  //document.querySelector('panel-layout').toggle('left');
  this.toggle = panel => {
    show[panel] = !show[panel];
    setClassNames.all()
  };
  //class name logic
  const setClassNames = {
    all() {
      section.main && this.main();
      section.head && this.head();
      section.foot && this.foot();
      section.left && this.left();
      section.right && this.right();
    },
    head() {
      const { classList } = section.head;
      classList.add('absolute', 'top-0', 'right-0', 'h-60', 'transition-500');
      if (section.left) {
        classList.remove('left-0');
        classList.add('left-226');
      } else {
        classList.remove('left-226');
        classList.add('left-0');
      }
      if (show.left) {
        classList.remove('md-left-0');
        classList.add('md-left-226');
      } else {
        classList.remove('md-left-226');
        classList.add('md-left-0');
      }
    },
    foot() {
      const { classList } = section.foot;
      classList.add('absolute', 'bottom-0', 'right-0', 'h-60', 'transition-500');
      if (section.left) {
        classList.remove('left-0');
        classList.add('left-226');
      } else {
        classList.remove('left-226');
        classList.add('left-0');
      }
      if (show.left) {
        classList.remove('md-left-0');
        classList.add('md-left-226');
      } else {
        classList.remove('md-left-226');
        classList.add('md-left-0');
      }
    },
    left() {
      const { classList } = section.left;
      classList.add('w-226', 'absolute', 'bottom-0', 'left-0', 'top-0', 'transition-500');
      if (show.left) {
        classList.remove('md-left--226');
        classList.add('md-left-0');
      } else {
        classList.remove('md-left-0');
        classList.add('md-left--226');
      }
    },
    right() {
      const { classList } = section.right;
      classList.add('w-200', 'absolute', 'right-0', 'transition-500');
      if (section.foot) {
        classList.remove('bottom-0');
        classList.add('bottom-60');
      } else {
        classList.remove('bottom-60');
        classList.add('bottom-0');
      }
      if (section.head) {
        classList.remove('top-0');
        classList.add('top-60');
      } else {
        classList.remove('top-60');
        classList.add('top-0');
      }
      if (show.right) {
        classList.remove('lg-right--200');
        classList.add('lg-right-0');
      } else {
        classList.remove('lg-right-0');
        classList.add('lg-right--200');
      }
    },
    main() {
      const { classList } = section.main;
      classList.add('absolute', 'transition-500');
      if (section.head) {
        classList.remove('top-0');
        classList.add('top-60');
      } else {
        classList.remove('top-60');
        classList.add('top-0');
      }
      if (section.foot) {
        classList.remove('bottom-0');
        classList.add('bottom-60');
      } else {
        classList.remove('bottom-60');
        classList.add('bottom-0');
      }
      if (section.left) {
        classList.remove('left-0');
        classList.add('left-226');
      } else {
        classList.remove('left-226');
        classList.add('left-0');
      }
      if (section.right) {
        classList.remove('right-0');
        classList.add('right-200');
      } else {
        classList.remove('right-200');
        classList.add('right-0');
      }
      if (show.left) {
        classList.remove('md-left-0');
        classList.add('md-left-226');
      } else {
        classList.remove('md-left-226');
        classList.add('md-left-0');
      }
      if (show.right) {
        classList.remove('lg-right-0');
        classList.add('lg-right-200');
      } else {
        classList.remove('lg-right-200');
        classList.add('lg-right-0');
      }
    }
  };
  //initial setup
  setClassNames.all();
  this.classList.add('block', 'relative', 'w-full', 'vh', 'scroll-hidden');
</script>
{panels}