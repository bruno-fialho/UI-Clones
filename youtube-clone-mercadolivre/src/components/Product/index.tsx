import React from "react";

import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import tshirtImage from "../../assets/tshirt.png";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="/">Compartilhar</a>
        <a href="/">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que est[a esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="/">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum
      perspiciatis molestiae inventore eius commodi numquam vitae ducimus
      tenetur, eaque ab omnis accusantium aspernatur, suscipit dolores, debitis
      minus facilis necessitatibus nobis repudiandae. Quo similique ipsum, nam
      odio nihil deleniti natus, minima reprehenderit inventore minus distinctio
      perspiciatis.
      <br />
      <br />
      Itens inclusos:
      <br />
      - 1x LED
      <br />
      - 1x LED
      <br />
      - 1x LED
      <br />
      - 1x LED
      <br />
      - 1x LED
      <br />
      <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit nulla
      autem recusandae sapiente? Consectetur ipsa ex accusantium quod corrupti
      at eligendi veniam amet repellendus odio deserunt dignissimos,
      perferendis, fugiat esse qui dolor sunt omnis nobis animi aliquam. Quaerat
      explicabo doloremque eum debitis rerum necessitatibus quia, aliquid quos
      quasi nam? Deserunt, porro in voluptatum assumenda incidunt officiis
      voluptates maxime magni laboriosam aut eum, dolorum ut amet? Nostrum
      dignissimos, voluptatibus quos mollitia nihil autem enim laborum est
      quidem officiis nobis porro voluptatum, qui commodi tenetur adipisci
      voluptas. Ducimus dolorum necessitatibus neque magni culpa in quae fuga
      eius sint sunt quod, perferendis architecto eaque nostrum nemo enim, quos
      labore odio facilis vel. Culpa sequi autem ut, laudantium cupiditate
      veniam dicta provident aliquid maiores voluptate, fugit dignissimos
      reprehenderit. Totam, odio. Id libero commodi temporibus, incidunt optio
      consequuntur qui, dolorum, iusto dolore dignissimos quis nihil error
      magnam suscipit placeat similique itaque nostrum eius neque aut
      reprehenderit. Nesciunt culpa delectus ducimus repudiandae. Alias velit
      ullam eaque aspernatur temporibus nesciunt quod?
    </p>
  </Description>
);

export default Product;
