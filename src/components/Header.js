import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

const ShopHeader = () => {
  return (
    <Header as="h1" block>
      <h1 className="ui block header ui blue header">
        <Link to="/">React Shop</Link>
      </h1>
    </Header>
  );
};
export default ShopHeader;
