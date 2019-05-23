import React from 'react';

class championModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champModal: false,
    };
  }

  render() {
    return (
      <div>
        <style jsx>
          {`
            .championModal {
              background-color: white;
            }
          `}
        </style>
        <div className="championModal">
          <p>{this.props.championName}</p>
        </div>
      </div>
    );
  }
}

export default championModal;
