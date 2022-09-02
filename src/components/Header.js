import React from "react";
import { moneyFormat } from "../helpers";

function Header({ total, money }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          You have <span>$ {moneyFormat(money - total)} </span>left!
        </div>
      )}
      {total === 0 && (
        <div className="header">
          You have <span>$ {moneyFormat(money)}</span> to spend !
        </div>
      )}
      {money - total === 0 && (
        <div className="header"> You have no money! </div>
      )}
      <style jsx>
        {`
          .header {
            position: sticky;
            top: 0;
            background: linear-gradient(to bottom, green, greenyellow);
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 34px;
            letter-spacing: 1px;
          }
          .header span {
            margin: 0 10px;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}

export default Header;
