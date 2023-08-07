import React, { Component } from "react";

import img11 from "../img/male-tourist.f000d0ad1ca492b2bcfb.png";

export class Subrise extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-lg-6">
          <h2>Subcribe DUONG now to get useful traveling information</h2>
          <div className="d-flex  align-items-center">
            <input
              type="text"
              className="form-control shadow-none w-50"
              placeholder="Enter your email"
            ></input>
            <button type="submit" className="btn">
              Subcribe
            </button>
          </div>
          <p>WE SO CHIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP</p>
        </div>
        <div className="col-lg-6">
          <img src={img11} alt="" className="img-fluid" />
        </div>
      </div>
    );
  }
}
export default Subrise;
