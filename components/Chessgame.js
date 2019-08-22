import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessRook,
  faChessKnight,
  faChessBishop,
  faChessQueen,
  faChessKing,
  faChessPawn
} from "@fortawesome/free-solid-svg-icons";
import "./Chessgame.css";

const Chessgame = () => {
  // const change = () => {
  //   document.getElementById("body-bg").style.backgroundColor = "red";
  // };

  return (
    // <body id="body-bg" onClick={change}>
    <Fragment>
      <div className="chess-body">
        <div className="chess-container">
          <table>
            <tr>
              <td>
                <FontAwesomeIcon icon={faChessRook} className="icon-white" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessKnight} className="icon-white" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessBishop} className="icon-white" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessQueen} className="icon-white" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessKing} className="icon-white" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessBishop} className="icon-white" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessKnight} className="icon-white" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessRook} className="icon-white" />
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faChessPawn}
                  className="iconpawn-white"
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faChessPawn}
                  className="iconpawn-white"
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faChessPawn}
                  className="iconpawn-white"
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faChessPawn}
                  className="iconpawn-white"
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faChessPawn}
                  className="iconpawn-white"
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faChessPawn}
                  className="iconpawn-white"
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faChessPawn}
                  className="iconpawn-white"
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faChessPawn}
                  className="iconpawn-white"
                />
              </td>
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faChessPawn} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessPawn} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessPawn} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessPawn} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessPawn} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessPawn} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessPawn} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessPawn} className="icon" />
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faChessRook} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessKnight} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessBishop} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessQueen} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessKing} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessBishop} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessKnight} className="icon" />
              </td>
              <td>
                <FontAwesomeIcon icon={faChessRook} className="icon" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Fragment>
    // </body>
  );
};

export default Chessgame;
