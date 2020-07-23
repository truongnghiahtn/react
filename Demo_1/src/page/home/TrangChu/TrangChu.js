import React, { Component } from "react";
import Card from "./../../../components/Card/card";
import OwlCarousel from "react-owl-carousel";
import "./TrangChu.scss";

export default class TrangChu extends Component {
  listSkill = [
    {
      id: "The Barbarian",
      Traning: "20",
      Speed: "16",
      cost: "150",
      img:"/assets/img/barbarian.png",
      bg_color:"#EC9B3B",
      bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/coc-background.jpg",
      skill:
        "The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache."
    },
    {
      id: "The Archer",
      Traning: "25",
      Speed: "24",
      cost: "300",
      img:"/assets/img/archer.png",
      bg_color:"#EE5487",
      bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg",
     
      skill:
        "The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch."
    },
    {
      id: "The Giant",
      Traning: "2",
      Speed: "12",
      cost: "2250",
      img:"/assets/img/giant.png",
      bg_color:"#F6901A",
      bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg",
    
      skill:
        "The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.",
      Traning: ""
    },
    {
      id: "The Goblin",
      Traning: "30",
      Speed: "32",
      cost: "100",
      img:"/assets/img/goblin.png",
      bg_color:"#82BB30",
      bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg",
   
      skill:
        "These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless."
    },
    {
      id: "The Wizard",
      Traning: "5",
      Speed: "16",
      cost: "4000",
      img:"/assets/img/wizard.png",
      bg_color:"#4FACFF",
      bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
       
      skill:
        "The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!"
    },
    {
        id: "The Barbarian",
        Traning: "20",
        Speed: "16",
        cost: "150",
        img:"/assets/img/barbarian.png",
        bg_color:"#EC9B3B",
        bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/coc-background.jpg",
        skill:
          "The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache."
      },
      {
        id: "The Archer",
        Traning: "25",
        Speed: "24",
        cost: "300",
        img:"/assets/img/archer.png",
        bg_color:"#EE5487",
        bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg",
       
        skill:
          "The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch."
      },
      {
        id: "The Giant",
        Traning: "2",
        Speed: "12",
        cost: "2250",
        img:"/assets/img/giant.png",
        bg_color:"#F6901A",
        bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg",
      
        skill:
          "The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.",
        Traning: ""
      },
      {
        id: "The Goblin",
        Traning: "30",
        Speed: "32",
        cost: "100",
        img:"/assets/img/goblin.png",
        bg_color:"#82BB30",
        bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg",
     
        skill:
          "These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless."
      },
      {
        id: "The Wizard",
        Traning: "5",
        Speed: "16",
        cost: "4000",
        img:"/assets/img/wizard.png",
        bg_color:"#4FACFF",
        bg_img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
         
        skill:
          "The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!"
      }
    
  ];

  renderhtml = () => {
    return this.listSkill.map((item, index) => {
      return <Card key={index} content={item} />;
    });
  };
  render() {
    return (
      <div class="slide-container">
        <div>
          <OwlCarousel
            className="owl-theme"
            margin={48}
            nav={false}
            dotsEach={false}
            responsiveClass
            mouseDrag={false}
            touchDrag={false}
            responsive={{
              0: {
                items: 1
              },
              600: {
                items: 2
              },
              992: {
                items: 3
              }
            }}
            key={`carousel_${this.listSkill.length}`}
          >
            {this.renderhtml()}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
