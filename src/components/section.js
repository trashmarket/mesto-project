import Card from '../components/create-card.js';
import { setParamCard } from '../components/set-param-card.js';
// import { setParamsTemplateCards } from '../components/set-prams-template-card';
// import { cloneCardTemplate } from '../components/utils.js' // - удалить. больше не нужен
const cardTemplate = document.querySelector('#card').content;



export function renderCards(item, myId) {
  const cardNew = new Card(setParamCard(
    item.link,
    item.name,
    item.owner._id,
    item.likes,
    item._id,
    myId
  ),
  '#card',
  )
  return cardNew.create()
}


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

