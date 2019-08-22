import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessRook,
  faChessKnight,
  faChessBishop,
  faChessQueen,
  faChessKing,
  faChessPawn
} from "@fortawesome/free-solid-svg-icons";

class Chessgame2 extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  render() {
    return (
      <Fragment>
        <div className="chess-body">
          <div className="chess-container">
            <table>
              <tr>
                <td id="one" className="brown">
                  <FontAwesomeIcon icon={faChessRook} className="icon-white" />
                </td>
                <td id="two">
                  <FontAwesomeIcon
                    icon={faChessKnight}
                    className="icon-white"
                  />
                </td>
                <td id="three" className="brown">
                  <FontAwesomeIcon
                    icon={faChessBishop}
                    className="icon-white"
                  />
                </td>
                <td id="four">
                  <FontAwesomeIcon icon={faChessQueen} className="icon-white" />
                </td>
                <td id="five" className="brown">
                  <FontAwesomeIcon icon={faChessKing} className="icon-white" />
                </td>
                <td id="six">
                  <FontAwesomeIcon
                    icon={faChessBishop}
                    className="icon-white"
                  />
                </td>
                <td id="seven" className="brown">
                  <FontAwesomeIcon
                    icon={faChessKnight}
                    className="icon-white"
                  />
                </td>
                <td id="eight">
                  <FontAwesomeIcon icon={faChessRook} className="icon-white" />
                </td>
              </tr>
              <tr>
                <td id="nine">
                  <FontAwesomeIcon
                    icon={faChessPawn}
                    className="iconpawn-white"
                  />
                </td>
                <td id="ten" className="brown">
                  <FontAwesomeIcon
                    icon={faChessPawn}
                    className="iconpawn-white"
                  />
                </td>
                <td id="eleven">
                  <FontAwesomeIcon
                    icon={faChessPawn}
                    className="iconpawn-white"
                  />
                </td>
                <td id="twelve" className="brown">
                  <FontAwesomeIcon
                    icon={faChessPawn}
                    className="iconpawn-white"
                  />
                </td>
                <td id="thirteen">
                  <FontAwesomeIcon
                    icon={faChessPawn}
                    className="iconpawn-white"
                  />
                </td>
                <td id="fourteen" className="brown">
                  <FontAwesomeIcon
                    icon={faChessPawn}
                    className="iconpawn-white"
                  />
                </td>
                <td id="fifteen">
                  <FontAwesomeIcon
                    icon={faChessPawn}
                    className="iconpawn-white"
                  />
                </td>
                <td id="sixteen" className="brown">
                  <FontAwesomeIcon
                    icon={faChessPawn}
                    className="iconpawn-white"
                  />
                </td>
              </tr>
              <tr>
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
              </tr>
              <tr>
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
              </tr>
              <tr>
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
              </tr>
              <tr>
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
                <td />
                <td className="brown" />
              </tr>
              <tr>
                <td id="one" className="brown">
                  <FontAwesomeIcon icon={faChessPawn} className="icon" />
                </td>
                <td id="one">
                  <FontAwesomeIcon icon={faChessPawn} className="icon" />
                </td>
                <td id="one" className="brown">
                  <FontAwesomeIcon icon={faChessPawn} className="icon" />
                </td>
                <td id="one">
                  <FontAwesomeIcon icon={faChessPawn} className="icon" />
                </td>
                <td id="one" className="brown">
                  <FontAwesomeIcon icon={faChessPawn} className="icon" />
                </td>
                <td id="one">
                  <FontAwesomeIcon icon={faChessPawn} className="icon" />
                </td>
                <td id="one" className="brown">
                  <FontAwesomeIcon icon={faChessPawn} className="icon" />
                </td>
                <td id="one">
                  <FontAwesomeIcon icon={faChessPawn} className="icon" />
                </td>
              </tr>
              <tr>
                <td id="one">
                  <FontAwesomeIcon icon={faChessRook} className="icon" />
                </td>
                <td id="one" className="brown">
                  <FontAwesomeIcon icon={faChessKnight} className="icon" />
                </td>
                <td id="one">
                  <FontAwesomeIcon icon={faChessBishop} className="icon" />
                </td>
                <td id="one" className="brown">
                  <FontAwesomeIcon icon={faChessQueen} className="icon" />
                </td>
                <td id="one">
                  <FontAwesomeIcon icon={faChessKing} className="icon" />
                </td>
                <td id="one" className="brown">
                  <FontAwesomeIcon icon={faChessBishop} className="icon" />
                </td>
                <td id="one">
                  <FontAwesomeIcon icon={faChessKnight} className="icon" />
                </td>
                <td id="one" className="brown">
                  <FontAwesomeIcon icon={faChessRook} className="icon" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Chessgame2;
