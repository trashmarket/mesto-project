export default class Section {
  constructor(items, container) {
    this.items = items.data;
    this.myId = items.id;
    this.renderer = items.renderData;
    this.container = container;
  }


  rendererCards() {
    this.items.forEach(item => {
      this.container.append(
        this.renderer(item, this.myId)
      )
    });
  }


  addItem(elem) {
    this.container.prepend(
      this.renderer(elem, elem.owner._id)
    )
  }

}

