import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

export default function Page4() {
  return (
    <ScrollOverPack id="page4" className="content-wrapper page">
      <QueueAnim
        className="text-wrapper-bottom"
        key="text"
        leaveReverse
        type="bottom"
      >
        <h2 key="h2">
          About Us
        </h2>
        <p key="p" style={{ maxWidth: 1200 }}>
          Founded in 2024, ZeekerCloud is committed to providing E2E cloud
          services from application modernization to cloud infrastructure migration.
          We work with the world's leading public cloud providers to
          provide security, reliability, and stability for your digital infrastructure.
        </p>
      </QueueAnim>
      <TweenOne
        key="image"
        className="image4 bottom-wrapper"
        animation={{
          y: 0, opacity: 1, duration: 550, delay: 150, ease: 'easeOutQuad',
        }}
        style={{ transform: 'translateY(50px)', opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
