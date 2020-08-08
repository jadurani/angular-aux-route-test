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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalCtrl: ModalController,
    private animationCtrl: AnimationController,
  ) { }

  async openDialog() {
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


    // this.router.navigate(['./', { outlets: { side: ['detail', '1234'] } }], { relativeTo: this.route });
    this.router.navigate(['/home/menu', { outlets: { side: ['detail', '1234'] } }]);

    const modal = await this.modalCtrl.create({
      component: ModalRouterComponent,
      cssClass: 'hello-wrapper',
      enterAnimation,
      leaveAnimation
    });


    await modal.present();
    // this.router.navigate(['/home/menu', { outlets: { side: ['detail', '1234'] } }]);

    modal
      .onDidDismiss()
      .then(() => {
        this.router.navigate(['/home/menu', { outlets: { side: null } }])
      })
  }
}
