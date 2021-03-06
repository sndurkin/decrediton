// @flow
import React from "react";
import KeyBlueButton from "../KeyBlueButton";
import SlateGrayButton from "../SlateGrayButton";
import "../../style/ImportScriptModal.less";

const Modal = ({
  hidden,
  heading,
  description,
  script,
  passPhrase,
  hasFailedAttempt,
  setScript,
  setPassPhrase,
  onSubmit,
  onCancel
}) => (
  <div hidden={hidden} className="import-script-modal">
    <div className="modal-section">
      <div className="import-script-modal-heading">{heading}</div>
      <div className="import-script-modal-description">{description}</div>
      <div className="import-script-modal-field-ct">
        <div className="import-script-modal-label">Redeem Script:</div>
        <input
          id="script"
          className="import-script-modal-field"
          type="text"
          placeholder=""
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />
      </div>
      <div className="import-script-modal-error-ct">
        <div className="import-script-modal-label"></div>
        <div className="import-script-modal-error">{(hasFailedAttempt && !script) ? "*Please enter your script" : null}</div>
      </div>
      <div className="import-script-modal-field-ct">
        <div className="import-script-modal-label">Private Passphrase:</div>
        <input
          id="passphrase"
          className="import-script-modal-field"
          type="password"
          placeholder=""
          value={passPhrase}
          onChange={(e) => setPassPhrase(e.target.value)}
        />
      </div>
      <div className="import-script-modal-error-ct">
        <div className="import-script-modal-label"></div>
        <div className="import-script-modal-error">{(hasFailedAttempt && !passPhrase) ? "*Please enter your private passphrase" : null}</div>
      </div>
      <div className="import-script-modal-toolbar">
        <KeyBlueButton style={{float: "left"}} onClick={onSubmit}>save</KeyBlueButton>
        <SlateGrayButton style={{float: "right"}} onClick={onCancel}>cancel</SlateGrayButton>
      </div>
    </div>
  </div>
);

export default Modal;
