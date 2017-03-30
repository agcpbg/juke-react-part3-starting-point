import React from 'react';

const NewPlaylist = (props) => {
    const { handleSubmit, handleChange, inputValue, buttonState, formDirty} = props;
    return (
        <div className="well">
          <form className="form-horizontal" onSubmit = {handleSubmit} >
            <fieldset>
              <legend>New Playlist</legend>
              <div className="form-group">
                <label className="col-xs-2 control-label">Name</label>
                <div className="col-xs-10">
                  <input value={inputValue} className="form-control" type="text" onChange = {handleChange}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button disabled={buttonState} type="submit" className="btn btn-success">Create Playlist</button>
                </div>
              </div>
            </fieldset>
          </form>
          {
            formDirty && inputValue.length === 0 ?
            <div className="alert alert-warning">Please enter a name</div>
            : inputValue.length > 16 ?
            <div className="alert alert-warning">Name has too many characters</div>
            : null
          }
        </div>
    )
}


export default NewPlaylist;
