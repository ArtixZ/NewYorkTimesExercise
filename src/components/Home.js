import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getTopStory, getArchiveStory } from '../actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            curIndex:0
        }
    }

    
    componentWillMount() {
        const { getTopStory, getArchiveStory } = this.props;
        getTopStory();
        getArchiveStory();
    }
    
    renderTitle = (topMostStory) => {
        return (
            <div className="topMostStory-title-container">
                <div className="topMostStory-title-articalTitle">
                    {topMostStory.title}
                </div>
                <div className="topMostStory-title-articalByline">
                    {topMostStory.byline}{topMostStory.created_date}
                </div>
            </div>
        )
    }

    renderArchiveArticles = () => {
        const { curIndex } = this.state;
        const { archiveStory } = this.props.stories;
        const baseUrl = "https://static01.nyt.com/";

        return this.storiesInDisplay.map( (story, i) => {
            const thumbNail = story.multimedia.find( i => i.subtype == 'wide');
            if(!thumbNail) 
                console.log(thumbNail)
            return(
                <div key={i} className="archiveStory card">
                    <div className="archiveStory-thumbNail">
                        <img src={baseUrl + thumbNail.url}/>
                    </div>
                    <div className="archiveStory-content">
                        <div className="topTwoStories-title-articalTitle">{story.headline.main}</div>
                        <div className="archiveStory-content-snippet">{story.snippet}</div>
                        <div className="archiveStory-content-byline">{story.byline.original}{story.pub_date}</div>
                    </div>
                </div>
            )
        })
    }

    onPrev = () => {
        this.setState({
            curIndex: this.state.curIndex - 10
        })
    }

    onNext = () => {
        this.setState({
            curIndex: this.state.curIndex + 10
        })
    }

    render() {
        const { curIndex } = this.state;        
        const {stories} = this.props;
        const { topStoryLoading, topStory, archiveStory, archiveStoryLoading } = stories;

        this.storiesInDisplay = archiveStory.slice(curIndex, curIndex+10);
        
        const topMostStory = topStory.length ? topStory[0] : {};
        const secondTopStory = topStory.length ? topStory[1] : {};
        const thirdTopStory = topStory.length ? topStory[2] : {};
        
        return (
            <div>
                <div className="archiveContainer">
                    <h4 className="topStories-title">Top Stories</h4>
                    <div className="flex-row topStories">
                        <div className="topMostStory flex-column card">
                            <div className="topMostStory-title flex-row">
                                <div className="topMostStory-title-txt">
                                    {topMostStory.title ? this.renderTitle(topMostStory) : null}
                                </div>
                                <div className="topMostStory-title-img">
                                    <img src={topMostStory.multimedia? topMostStory.multimedia[1].url : null}></img>
                                </div>
                            </div>
                            <div className="topMostStory-text flex-column">
                                {topMostStory.abstract ? topMostStory.abstract : null}
                            </div>
                        </div>
                        <div className="topTwoStories flex-column">
                            <div className="card topTwoStories-first">
                                <div className="topTwoStories-title-articalTitle">{secondTopStory.title}</div>
                                <div className="topTwoStories-title-articalByline">{secondTopStory.byline}{secondTopStory.created_date}</div>
                            </div>
                            <div className="card topTwoStories-second">
                                <div className="topTwoStories-title-articalTitle">{thirdTopStory.title}</div>
                                <div className="topTwoStories-title-articalByline">{thirdTopStory.byline}{thirdTopStory.created_date}</div>
                            </div>                        
                        </div>
                    </div>
                    <div className="archiveStories">
                        {this.renderArchiveArticles()}
                    </div>
                </div>
                <div className="leftBtn">
                    {
                        this.state.curIndex >= 10 ?
                        <button className="btn" onClick={this.onPrev}>Prev</button> : null
                    }
                </div>
                <div className="rightBtn">
                    {
                        this.state.curIndex < archiveStory.length - 10 ?
                        <button className="btn" onClick={this.onNext}>Next</button> : null
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {stories: state.homeStories}
}

export default connect(mapStateToProps, { 
    getTopStory,
    getArchiveStory,
 })(Home);