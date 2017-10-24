import React, { Component } from 'react';

class SearchPage extends Component {

    renderBreadCrumb = () => {
        const { location, goBack } = this.props;
        let parentTab;

        switch(location) {
            case '/': 
                parentTab = 'Home';
                break;
            default:
                parentTab = 'Home';

        }
        return(
            <div className="breadCrumb-container">  
                <div className="parentTabTxt"><a onClick={goBack}>{parentTab}&nbsp;</a></div>
                <div className="searchTxt">/&nbsp;Search</div>
            </div>
        )        
    }

    renderSearchRes = () => {
        const { searchRes } = this.props;
        
        return searchRes.map( (item, i) => {
            const thumbNail = item.multimedia.find(i => i.subtype == 'wide');
            const baseUrl = "https://static01.nyt.com/";
            
            return (
                <div key={i} className="card flex-row">
                    { thumbNail ? 
                        <div className="archiveStory-thumbNail">
                            <img src={baseUrl + thumbNail.url}/>
                        </div>
                        :null   
                    }
                    <div className="archiveStory-content">
                        <div className="topTwoStories-title-articalTitle">{item.headline.main}</div>
                        <div className="archiveStory-content-snippet">{item.snippet}</div>
                        <div className="archiveStory-content-byline">{item.byline.original}{item.pub_date}</div>                        
                    </div>
                </div>
            )
        })
    }

    render() {

        return(
            <div className="searchContainer">
                <div className="breadCrumbContainer">{this.renderBreadCrumb()}</div>
                <div>{this.renderSearchRes()}</div>
            </div>
        )
    }
}

export default SearchPage