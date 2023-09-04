import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdOutlineThumbUpOffAlt, MdThumbUpAlt } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import useModals from "./useModals";
import "./Modals.scss";

function Modals() {
  const {
    choosenUser,
    notes,
    handleClose,
    handleAddNote,
    handleNoteInput,
    handleMakeNoted,
    handleDeleteNote,
    show,
  } = useModals();
  return (
    <>
      <Modal
        className="modal-main-container"
        show={show}
        onHide={handleClose}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{choosenUser?.name + "'s notes"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-between modal-input-body mx-3">
          <input
            className="w-75"
            type="text"
            value={notes.content}
            placeholder="enter Note.!"
            onChange={handleNoteInput}
          />
          <Button variant="primary" onClick={handleAddNote}>
            Add Note
          </Button>
        </Modal.Body>
        <Modal.Body className="modal-note-body">
          {choosenUser?.notes && choosenUser.notes.length > 0 ? (
            choosenUser.notes.map((note) => (
              <div className="border" key={note.id}>
                <div className="note-body">
                  <p>{note.content}</p>
                </div>
                <hr />
                <div className="note-footer">
                  <p>
                    <span>
                      {note.status === "noted" ? (
                        <MdThumbUpAlt
                          onClick={() => handleMakeNoted(note)}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <MdOutlineThumbUpOffAlt
                          onClick={() => handleMakeNoted(note)}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </span>
                    <span>
                      <AiFillDelete
                        onClick={() => handleDeleteNote(note)}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No Notes Available</p>
          )}
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}

export default Modals;
