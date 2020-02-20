import React, { Component } from 'react';

class LocationInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            locationList: [],
        };
        this.cancel ='';
    }

    fetchLocation = async (query) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://gd.geobytes.com/AutoCompleteCity?callback=?&filter=DE&q=${query}`; 
        fetch(proxyurl + url)
            .then(response => response.text())
            .then(contents => console.log(contents))
            .catch(() => console.log("Can’t access " + url + " response."));
    }
    

    handleChange = query => {
        this.fetchLocation(query)
        this.setState({query});
    }

  	render() {
        return (
            <div>
                <input 
                    name="location"
                    value={this.state.query}
                    type="text" 
                    placeholder="Location" 
                    onChange={e => this.handleChange(e.target.value)}
                />
                <div>
                    {this.state.locationList}
                </div>
            </div>
        );
    }
}

export default LocationInput;
