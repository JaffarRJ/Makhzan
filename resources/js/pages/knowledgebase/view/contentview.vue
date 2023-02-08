<template>

  <div class="col-lg-8">
              <div class="card">
                <div class="card-body">
                  <article class="post">
                    <h1 class="post-title">Lorem ipsum dolor sit amet </h1>
                    <ul class="meta" v-for="item in knowledgecontent" :key="item.id">
                      <li><span>{{item.create}}</span> {{item.createddate}}</li>
                      <li><span>{{item.category}}</span> <a href="javascript:void(0)">{{item.categorydetail}}</a> <a href="javascript:void(0)">{{item.categorydetail1}}</a></li>
                      <li><span>{{item.update}}</span> {{item.updatedetail}}</li>
                      <li><span>{{item.comment}}</span> <a href="javascript:void(0)">{{item.commentno}}</a></li>
                      <li><span>{{item.view}}</span> {{item.viewno}}</li>
                    </ul>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <h2>Sed ut perspiciatis unde omnis iste</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <h2>Sed ut perspiciatis unde omnis iste</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </article>
                  <div class="feedback">
                    <h3>Was this article helpful to you?</h3>
                    <p>
                      <a href="javascript:void(0)" class="btn btn-success"><i class="fa fa-thumbs-up"></i></a>
                      <a href="javascript:void(0)" class="btn btn-danger ms-1"><i class="fa fa-thumbs-down"></i></a>
                    </p>
                    <p>29 found this helpful</p>
                  </div>
                  
                  <div class="comment-section">
                    <div class="comments-area clearfix">
                      <h3>( 2 ) Comments</h3>
                      <ul class="comment-list">
                        <li>
                          <div class="comment">
                            <div class="comment-author">
                              <img width="86" height="86" class="avatar avatar-86 photo" src="../../../../assets/img/user.jpg" alt="">
                            </div>
                            <div class="comment-details">
                              <div class="author-name">
                                <a class="url" href="javascript:void(0)">John Doe</a> <span class="commentmetadata">October 25, 2016 at 01:10 pm</span>
                              </div>
                              <div class="comment-body">
                                <p>Integer id dolor libero. Cras in turpis nulla. Vivamus at tellus erat. Nulla ligula sem, eleifend vitae semper et, blandit a elit. Nam et ultrices lectus. Ut sit amet risus eget neque scelerisque consectetur.</p>
                              </div>
                              <div class="reply"><a href="javascript:void(0)" class="comment-reply-link" rel="nofollow"><i class="fa fa-reply"></i> Reply</a></div>
                            </div>
                          </div>
                          <ul class="children">
                            <li>
                              <div class="comment">
                                <div class="comment-author">
                                  <img width="86" height="86" class="avatar avatar-86 photo" src="../../../../assets/img/user.jpg" alt="">
                                </div>
                                <div class="comment-details">
                                  <div class="author-name">
                                    <a href="javascript:void(0)" class="comment-reply-link"></a><a class="url" href="javascript:void(0)">Astin Robert</a> <span class="commentmetadata">October 25, 2016 at 01:10 pm</span>
                                  </div>
                                  <div class="comment-body">
                                    <p>Mauris hendrerit consequat quam, sit amet fermentum metus cursus in. Nunc ac justo suscipit erat sagittis maximus a at tellus. Pellentesque congue nisi a nisl volutpat tempor.</p>
                                  </div>
                                  <div class="reply"><a href="javascript:void(0)" class="comment-reply-link"><i class="fa fa-reply"></i> Reply</a></div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div class="comment-reply">
                        <h3 class="comment-reply-title">Leave a Reply</h3>
                        <form>
                          <div class="row">
                            <div class="col-md-4">
                              <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" class="form-control">
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" class="form-control">
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label for="website">Website</label>
                                <input type="text" id="website" name="website" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="comment">Comment *</label>
                            <textarea id="comment" name="comment" class="form-control" rows="3" cols="5"></textarea>
                          </div>
                          <div class="submit-section">
                            <button type="submit" class="btn btn-primary submit-btn">Post Comment</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</template>
<script>
  import knowledgecontent from '../../../../assets/json/knowledgecontent.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    knowledgecontent: knowledgecontent
    }
    },
    components: {
   
    },
  }
</Script>