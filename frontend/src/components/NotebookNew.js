const React = require('react');
const NotebookEdit = require('./NotebookEdit');

/**
 * A button which expands into a form for writing a new notebook.
 */
class NoteBookNew extends React.Component {
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

    const createNotebook = (newNotebook) => {
      this.props.createNotebook(newNotebook, (err) => {
        if(!err) closeEdit();
      });
    };

    // to switch to edit mode when editing is clicked.
      if(this.state.editing) {
     // Render component for editing the notebook
      return (
        <NotebookEdit
          notebook={this.props.notebook}
          onSave={createNotebook}
          onCancel={closeEdit}
        />

     );
   }



    return (
      <button className="blog-load-more btn btn-primary btn-lg"
        onClick={ openEdit }
      >
        <span className="fa fa plus"></span>Add a new notebook
      </button>
    );
  }
}

module.exports = NoteBookNew;