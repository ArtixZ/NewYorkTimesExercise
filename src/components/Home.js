import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Card } from 'antd';

import { getTopStory } from '../actions';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    
    componentWillMount() {
        const { getTopStory } = this.props;
        getTopStory();
    }
    
    renderTitle = (topMostStory) => {
        return (
            <div>
                <div>
                    {topMostStory.title}
                </div>
                <div>
                    {topMostStory.byline}{topMostStory.created_date}
                </div>
            </div>
        )
    }

    render() {
        const {stories} = this.props;
        const { topStoryLoading, topStory } = stories;
        const topMostStory = topStory.length ? topStory[0] : {}

        return (
            <div>
                <h4>Top Stories</h4>
                <div className="flex-row topStories">
                    <div className="topMostStory flex-column card">
                        <div className="topMostStory-title flex-row">
                            <div className="topMostStory-title-txt">
                                {topMostStory.title ? this.renderTitle(topMostStory) : null}
                            </div>
                            <div className="topMostStory-title-img">
                                <img src={topMostStory.multimedia? topMostStory.multimedia[0].url : null}></img>
                            </div>
                        </div>
                        <div className="topMostStory-text flex-column">
                            {topMostStory.abstract ? topMostStory.abstract : null}
                        </div>
                    </div>
                    <div className="topTwoStories">

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {stories: state.homeStories}
}

export default connect(mapStateToProps, { 
    getTopStory })(Home);