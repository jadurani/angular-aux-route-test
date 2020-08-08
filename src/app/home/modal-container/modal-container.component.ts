import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ModalRouterComponent } from "../modal-router/modal-router.component";
import { ActivatedRoute, Router } from "@angular/router";
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
})
export class ModalContainerComponent {
  modal: HTMLIonModalElement;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalCtrl: ModalController,
    private animationCtrl: AnimationController,
  ) {
    console.log('meow');
  }

  ionViewWillEnter() {
    const currentUrlTree = this.router.parseUrl(this.router.url);
    if ('side' in currentUrlTree.root.children) {
      console.log('yay');
      this.initModal().then(() => this.openDialog());
    }
  }

  ionViewWillLeave() {
    if (this.modal) {
      this.modal.dismiss();
    }
  }

  async initModal() {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create('rawr')
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .fromTo('right', '-50%', '0')
        .fromTo('opacity', '0', '0.99');

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    try {
      this.modal = await this.modalCtrl.create({
        component: ModalRouterComponent,
        cssClass: 'hello-wrapper',
        enterAnimation,
        leaveAnimation
      });
    } catch (error) {
      console.log('error tc 1')
    }
  }

  async openDialog() {

    this.router.navigate([{ outlets: { side: ['detail', '1234'] } }]);

    try {
      await this.modal.present();
      this.modal
        .onDidDismiss()
        .then(() => {
          this.router.navigate([{ outlets: { side: null } }]);
          this.initModal();
        }).catch(e => {})
    } catch (error) {
      console.log('error tc 2')
    }
  }
}
