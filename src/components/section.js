import СreateCard from '../components/create-card.js';
import { setParamCard } from '../components/set-param-card.js';
import { setParamsTemplateCards } from '../components/set-prams-template-card';
import { cloneCardTemplate } from '../components/utils.js'
const cardTemplate = document.querySelector('#card').content;

export function renderCards(item, myId) {
  const cardNew = new СreateCard(setParamCard(
    item.link,
    item.name,
    item.owner._id,
    item.likes,
    item._id,
    myId
  ),
    setParamsTemplateCards(cloneCardTemplate(cardTemplate))
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


  addItem() {
    this.container.prepend(
      this.renderer(this.items, this.items.owner._id)
    )
  }

}

