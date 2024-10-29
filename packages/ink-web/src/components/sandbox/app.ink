<script>
  const { 
    url, 
    code, 
    status,
    errors = {},
    settings = { menu: [] },
    brand = 'Admin', 
  } = this.props;
  //states
  const theme = 'dark';
  const show = { left: false, right: false };
  const children = this.originalChildren;
  //initial setup
  this.classList.add(
    'block', 
    'relative', 
    'w-full', 
    'vh', 
    'scroll-hidden',
    theme, 
    'bg-t-0', 
    'tx-t-1', 
    'tx-arial'
  );
  //this can be accessed by other components like this
  //document.querySelector('panel-layout').toggle('left');
  this.toggle = {
    left: () => {
      show.left = !show.left;
      this.toggle.update.all();
    },
    right: () => {
      show.right = !show.right;
      this.toggle.update.all();
    },
    theme: e => {
      const target = e.currentTarget;
      const icon = target?.querySelector('i');
      if (theme === 'dark') {
        this.classList.remove('dark');
        this.classList.add('light');
        icon?.classList.remove('fa-sun');
        icon?.classList.add('fa-moon');
        target?.classList.remove('bg-warning');
        target?.classList.add('bg-t-4');
      } else {
        this.classList.remove('light');
        this.classList.add('dark');
        icon?.classList.remove('fa-moon');
        icon?.classList.add('fa-sun');
        target?.classList.remove('bg-t-4');
        target?.classList.add('bg-warning');
      }
    },
    update: {
      all: () => {
        this.toggle.update.main();
        this.toggle.update.head();
        this.toggle.update.left();
        this.toggle.update.right();
      },
      head: () => {
        const { classList } = this.querySelector('header');
        if (show.left) {
          classList.remove('md-left-0');
          classList.add('md-left-226');
        } else {
          classList.remove('md-left-226');
          classList.add('md-left-0');
        }
      },
      left: () => {
        const { classList } = this.querySelector('aside[left]');
        if (show.left) {
          classList.remove('md-left--226');
          classList.add('md-left-0');
        } else {
          classList.remove('md-left-0');
          classList.add('md-left--226');
        }
      },
      right: () => {
        const { classList } = this.querySelector('aside[right]');
        if (show.right) {
          classList.remove('right--200');
          classList.add('right-0');
        } else {
          classList.remove('right-0');
          classList.add('right--200');
        }
      },
      main: () => {
        const { classList } = this.querySelector('main');
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
    }
  };
  //class name logic
  const className = {
    head: [ 
      'absolute', 
      'top-0', 
      'right-0', 
      'h-50', 
      'transition-500',
      'left-226',
      show.left ? 'md-left-226' : 'md-left-0'
    ].join(' '),
    left: [ 
      'w-226', 
      'absolute', 
      'bottom-0', 
      'left-0', 
      'top-0', 
      'transition-500',
      'z-10000',
      show.left ? 'md-left-0' : 'md-left--226'
    ].join(' '),
    right: [ 
      'w-200', 
      'absolute', 
      'transition-500',
      'bottom-0',
      'top-50',
      'z-10000',
      show.right ? 'right-0' : 'right--200'
    ].join(' '),
    main: [ 
      'absolute', 
      'transition-500',
      'top-50',
      'bottom-0',
      'left-226',
      'right-0',
      show.left ? 'md-left-226' : 'md-left-0',
      show.right ? 'lg-right-200' : 'lg-right-0'
    ].join(' ')
  };

  const notify = () => {
    //get notifier
    const notifier = document.querySelector('element-notify');
    //check if notifier exists
    if (!notifier) return;
    //check if there are errors
    if (Object.keys(errors).length > 0) {
      for (const key in errors) {
        if (typeof errors[key] === 'string') {
          notifier.notify('error', errors[key]);
        }
      }
    } else if (code !== 200) {
      notifier.notify('error', status);
    }
  };
</script>
<main class={className.main} mount=notify>{children}</main>