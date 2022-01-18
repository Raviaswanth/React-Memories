const React = require('react');
const NotebookView = require('./NotebookView');
const NotebookEdit = require('./NotebookEdit');

class NoteBook extends React.Component {
  constructor(props) {
    super(props);
    // Set initial internal state for this component
    this.state = { editing: false };
  }

  render() {
    const openEdit = () => {
      this.setState({ editing: true });
    };

    const closeEdit = () => {
      this.setState({ editing: false });
    };

    const saveEdit = (editedNotebook) => {
      this.props.saveNotebooks(editedNotebook, (err) => {
        if (!err) closeEdit();
      });
      this.props.saveSearchedNotebook(editedNotebook);

    };


    if (this.state.editing) {
      // Render component for editing the post
      return (
        <NotebookEdit
          notebook={this.props.notebooktitle}
          onSave={saveEdit}
          onCancel={closeEdit}
        />
      );
    }

    const deleteThisNotebook = () => {
      this.props.deleteNotebook(this.props.notebook.id);
      this.props.deleteSearchedNotebook(this.props.notebook.id);
      this.props.reset();
    }

    const notebookClicked = () => {
      this.props.getNotes(this.props.notebook.id)
    }

    return (
      <NotebookView
        deleteThisNotebook={deleteThisNotebook}
        openEdit={openEdit}
        notebookClicked={notebookClicked}
        title={this.props.notebook.title}
      />
    );
  }
}

// Export the notebook component
module.exports = NoteBook;