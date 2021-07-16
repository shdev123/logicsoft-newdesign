import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

	export class Blog extends React.Component
	{
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
			Ptitle:'',
			PostID:'',
			Pbody:'',
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
	
       getPosts() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                    <div className="col-md-6">
                      <div className="blog-list-box">
                        <div className="blog-list-img">
                          <a href="single-blog.html"><img src="/images/blog-list-2.png" alt=""/></a>
                        </div>
                        <h3><a href={'/posts/' + pd.id}>{pd.title}</a></h3>
                        <p className="blog-desc">{pd.body.substring(0, 70)}</p>
                        <a href={'/posts/' + pd.id} className="btn btn-white arrow-btn">Read more</a>
                        <div className="blog-list-author">
                          <div className="blog-author-img">
                            <img src="/images/author.png" alt=""/>
                          </div>
                          <div className="blog-author-name">
                            <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getPosts()
        });

    };

    componentDidMount() {
		
		axios
            .get(`https://jsonplaceholder.typicode.com/posts?id=1`)
            .then(res => {
				this.setState({Ptitle: res.data[0].title});
				this.setState({Pbody: res.data[0].body});
				this.setState({PostID: res.data[0].id});
            });
			
			
        this.getPosts();
		
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
                  <h3><a href={'/posts/' + this.state.PostID}>{this.state.Ptitle}</a></h3>
                  <p className="blog-desc">{this.state.Pbody}</p>
                  <a href={'/posts/' + this.state.PostID} className="btn btn-white arrow-btn">Read more</a>
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
		  
		  <div className="blog-list-bottom">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-list-row">
                  <div className="row">
				  
				  {this.state.postData}
                    
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="blog-sidebar-box">
                    <h4>As featured on Linkio Top SEO Agencies</h4>
                    <img src="/images/linkio.png"/>
                  </div>
                  <div className="blog-sidebar-box">
                    <h4>As featured on Feedspot Top 100 UK Marketing Blogs</h4>
                    <img src="/images/feedspot.png"/>
                  </div>
                  <div className="blog-sidebar-list">
                    <h3>Recent Blog</h3>
                    <ul>
                      <li><a href="#">Top Software Development Companies in London – Compare Quotes</a></li>
                      <li><a href="#">What is Web Application Development – A Beginner’s Guide</a></li>
                      <li><a href="#">The Ultimate Guide to Outsource Web Development</a></li>
                      <li><a href="#">Web Developer vs Software Developer – What is the Difference?</a></li>
                      <li><a href="#">The Ultimate Guide to Micro Influencers in the UK 2020</a> </li>
                    </ul>
                  </div>
                  <div className="blog-sidebar-list">
                    <h3>Main Services</h3>
                    <ul>
                      <li><a href="web-design.html">Web Design</a></li>
                      <li><a href="web-development.html">Web Development</a></li>
                      <li><a href="digital-marketing.html">Digital Marketing</a></li>
                      <li><a href="seo-marketing.html">SEO</a></li>
                      <li><a href="influencer-marketing.html">Influencer Marketing</a> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
			<div className="blog-pagination">
                  <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
					</div>
          </div>
		  
		</div>
		</div>
		</section>
		</div>
    );
		}
	
}


export default Blog;