import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

	export class Singlepost extends React.Component
	{
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
			Ptitle:'',
			Pbody:'',
            currentPage: 0
        };
        
    }

    componentDidMount() {
		const { match: { params } } = this.props;
		axios
            .get(`https://jsonplaceholder.typicode.com/posts?id=`+params.id)
            .then(res => {
				this.setState({Ptitle: res.data[0].title});
				this.setState({Pbody: res.data[0].body});
            });
			
    }
	
	
		render() {
		
    return (
	     <div>
	 <section className="blog-page-sec">
      <div className="container">
        <div className="blog-page-in">
		<div className="blog-list-top">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="blog-list-top-img">
                  <a href="single-blog.html"><img src="/images/blog-list-1.png"/></a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-list-box">
                  <h3><a href="single-blog.html">{this.state.Ptitle}</a></h3>
                  <p className="blog-desc">{this.state.Pbody}</p>
                  <a href="single-blog.html" className="btn btn-white arrow-btn">Read more</a>
                  <div className="blog-list-author">
                    <div className="blog-author-img">
                      <img src="/images/author.png"/>
                    </div>
                    <div className="blog-author-name">
                      <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
		  
		  
		</div>
		</div>
		</section>
		</div>
    );
		}
	
}


export default Singlepost;