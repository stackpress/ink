<link rel="import" type="component" href="./table/table.ink" name="table-wrapper" />
<script>
  import ClientRegistry from '@stackpress/ink/dist/client/Registry';
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import Thead from './table/thead.ink';
  import Tbody from './table/tbody.ink';
  import Tfoot from './table/tfoot.ink';
  //extract props
  const { 
    //sticky props
    top, bottom, left, right,
    //section classes
    head, body, odd, even, foot
  } = this.props;
  //if any sticky, then sticky
  const sticky = top || bottom || left || right;
  //make default classLists
  const headList = typeof head === 'string'
    ? head.split(' ').filter(Boolean)
    : [];
  const footList = typeof foot === 'string'
    ? foot.split(' ').filter(Boolean)
    : [];
  const bodyList = typeof body === 'string'
    ? body.split(' ').filter(Boolean)
    : [];
  const oddList = typeof odd === 'string'
    ? odd.split(' ').filter(Boolean)
    : [];
  const evenList = typeof even === 'string'
    ? even.split(' ').filter(Boolean)
    : [];
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //default host styles
  styles.add(':host', 'width', '100%');
  if (sticky) {
    styles.add(':host', 'display', 'block');
    styles.add(':host', 'position', 'relative');
    styles.add(':host', 'overflow', 'auto');
    styles.add(':host', 'height', '100%');
  } else {
    styles.add(':host', 'display', 'table');
  }

  //let's re organize the children
  const rows: Node[] = [];
  const headers: Node[] = [];
  const footers: Node[] = [];
  const children = this.originalChildren;
  //start sorting out which is which
  for (const [ i, child ] of children.entries()) {
    if (child.nodeName.includes('HEAD')) {
      headers.push(child);
    } else if (child.nodeName.includes('FOOT')) {
      footers.push(child);
    } else if (child.nodeName.includes('ROW')) {
      rows.push(child);
    }
  }
  //loop through headers
  for (const [ i, header ] of headers.entries()) {
    header.setAttribute('head', '');
    if (headList.length > 0) {
      header.classList.add(...headList);
    }
    if (top) {
      header.setAttribute('top', '');
    }
    if (left && i === 0) {
      header.setAttribute('left', '');
    }
    if (right && i === (headers.length - 1)) {
      header.setAttribute('right', '');
    }
  }
  //loop through footers
  for (const [ i, footer ] of footers.entries()) {
    footer.setAttribute('foot', '');
    if (footList.length > 0) {
      footer.classList.add(...footList);
    }
    if (bottom) {
      footer.setAttribute('bottom', '');
    }
    if (left && i === 0) {
      footer.setAttribute('left', '');
    }
    if (right && i === (footers.length - 1)) {
      footer.setAttribute('right', '');
    }
  }
  //loop through rows
  for (const [ i, row ] of rows.entries()) {
    row.setAttribute('row', '');
    Array.from(row.children || []).forEach((cell, j, cells) => {
      bodyList.length > 0 && cell?.classList?.add(...bodyList);
      oddList.length > 0 && i % 2 === 0 && cell?.classList?.add(...oddList);
      evenList.length > 0 && i % 2 === 1 && cell.classList?.add(...evenList);
      if (left && j === 0) {
        cell.setAttribute('left', '');
      }
      if (right && j === (cells.length - 1)) {
        cell.setAttribute('right', '');
      }
    });
  }

  //empty the children
  this.innerText = '';
  //append new children (these are the new things to slot)
  headers.length && this.appendChild(
    ClientRegistry.createComponent(
      'table-thead', 
      Thead, 
      {}, 
      headers
    ).element
  );
  rows.length && this.appendChild(
    ClientRegistry.createComponent(
      'table-tbody', 
      Tbody, 
      {}, 
      rows
    ).element
  );
  footers.length && this.appendChild(
    ClientRegistry.createComponent(
      'table-tfoot', 
      Tfoot, 
      {}, 
      footers
    ).element
  );
</script>
<if true={sticky}>
  <table-wrapper>
    <slot></slot>
  </table-wrapper>
<else />
  <slot></slot>
</if>