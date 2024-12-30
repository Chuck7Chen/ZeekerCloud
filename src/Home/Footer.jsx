
import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Contact Us</h2>
              <div>
                <span style={{ color: '#fff' }}>Email</span>
                <span> - </span>
                contact@zeekercloud.com
              </div>
            </div>
          </Col>
          {/* <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img className="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" alt="" />
                更多产品
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">AntV</a>
                <span> - </span>
                数据可视化
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a>
                <span> - </span>
                企业级 Node 开发框架
              </div>
            </div>
          </Col> */}
        </Row>
      </div>
      {/* <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: '16px', paddingRight: 12,
              marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              隐私权政策
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              权益保障承诺书
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © 蚂蚁金融服务集团</span>
        </Col>
      </Row> */}
    </footer>
  );
}

export default Footer;
