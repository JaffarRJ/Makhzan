<template>
    <div class="tab-pane active" id="okr_tab">
                                        <div class="row">
                                            <div class="col-md-12 col-lg-12">
                                               
                                                <div class="form-group">
                                                    <label>OKRs Description</label>
                                                    <textarea rows="5" cols="5" class="form-control" name="description">Objectives and Key Results (OKR) is a framework for defining and tracking organizations objectives and their outcomes. OKRs comprise an Objective—a clearly defined goal—and one or more Key Results—specific measures used to track the achievement of that goal. The goal of OKR is to define how to achieve objectives through concrete, specific and measurable actions. Key Results can be measured on a sliding scale from 0.0 - 1.0 or 0-100%. Objectives should also be supported by initiatives, which are the plans and activities that help to achieve the objective and move forward the key results. Once objectives and key results have been established, regular and quarterly check-ins are required to make sure OKRs is progressing</textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-lg-12">
                                                <div class="rating-list m-t-20">
                                                    <span class="rating-bad">
                                                    <span class="rating-count">
                                                    <a class="me-1" href="">0.0</a>
                                                    <a class="me-1" href="">0.1</a>
                                                    <a class="me-1" href="">0.2</a>
                                                    <a class="me-1" href="">0.3</a>
                                                    </span><br>
                                                    <span class="rating-text">We failed to make real progress</span>
                                                    </span>
                                                    <span class="rating-normal">
                                                    <span class="rating-count">
                                                    <a class="me-1" href="">0.4</a>
                                                    <a class="me-1" href="">0.5</a>
                                                    <a class="me-1" href="">0.6</a>
                                                    </span><br>
                                                    <span class="rating-text">We made progress, but fell short of completion</span>
                                                    </span>
                                                    <span class="rating-good">
                                                    <span class="rating-count">
                                                    <a class="me-1" href="">0.7</a>
                                                    <a class="me-1" href="">0.8</a>
                                                    <a class="me-1" href="">0.9</a>
                                                    <a href="">1.0</a>
                                                    </span><br>
                                                    <span class="rating-text">We delivered</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-lg-12">
                                                <div class="submit-section my-3">
                                                    <button class="btn btn-primary submit-btn performance_status red_circle" data-status="okr" title="Admin can’t activate it again">Activate OKR</button>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-lg-12">
                                                <hr style="margin-top:0;">
                                                <div class="form-group m-b-0">
                                                    <label>Choose Your Rating Scale</label>
                                                    <div class="radio_input" id="rating_scale_select_okr">
                                                        <label class="radio-inline custom_radio">
                                                        <input type="radio" name="rating_scale" value="rating_01_010" required="" class="rating_scale" checked="">0.1 - 1.0 <span class="checkmark"></span>
                                                        </label>
                                                        <label class="radio-inline custom_radio">
                                                        <input type="radio" name="rating_scale" value="rating_1_5" required="" class="rating_scale">1 - 5 <span class="checkmark"></span>
                                                        </label>
                                                        <label class="radio-inline custom_radio">
                                                        <input type="radio" name="rating_scale" value="rating_1_10" class="rating_scale">1 - 10 <span class="checkmark"></span>
                                                        </label>
                                                        <label class="radio-inline custom_radio">
                                                        <input type="radio" name="rating_scale" value="custom_rating" class="rating_scale">Custom <span class="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                </div>

                                                <!--0.1 to  1.0 Ratings Content -->
                                                <div class="form-group" id="01ratings_cont_okr" style="display: block">
                                                    <div class="table-responsive">
                                                        <form>
                                                            <table class="table setting-performance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Rating</th>
                                                                        <th>Short Descriptive Word</th>
                                                                        <th>Definition</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="width:50px;"> 0.1 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="0.1">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="dsdsd" placeholder="Short word to describe rating of 0.1" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">dfsdfa</textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width:50px;"> 0.2 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="0.2">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="sdfdsf" placeholder="Short word to describe rating of 0.2" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">sdfdsf</textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width:50px;"> 0.3 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="0.3">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="sdfds" placeholder="Short word to describe rating of 0.3" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">fsdf</textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width:50px;"> 0.4 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="0.4">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="sdfds" placeholder="Short word to describe rating of 0.4" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">fsdf</textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width:50px;"> 0.5 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="0.5">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="sdfdsf" placeholder="Short word to describe rating of 0.5" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">sdf</textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width:50px;"> 0.6 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="0.6">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="sdfds" placeholder="Short word to describe rating of 0.6" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">fsdsdf</textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width:50px;"> 0.7 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="0.7">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="dsfd" placeholder="Short word to describe rating of 0.7" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">fsdf</textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width:50px;"> 0.8 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="0.8">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="sdfsdf" placeholder="Short word to describe rating of 0.8" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">sdfds</textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width:50px;"> 0.9 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="0.9">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="sdf" placeholder="Short word to describe rating of 0.9" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">sdfsdsf</textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width:50px;"> 1.0 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="hidden" name="rating_no[]" class="form-control" value="1.0">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" value="dg" placeholder="Short word to describe rating of 1.0" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required="">fg</textarea>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div class="submit-section m-b-0">
                                                                <button class="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- 0.1 to  1.0  Ratings Content -->

                                                <!-- 5 Ratings Content -->
                                                <div class="form-group" id="5ratings_cont_okr" style="display: none">
                                                    <div class="table-responsive">
                                                        <form>
                                                            <table class="table setting-performance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Rating</th>
                                                                        <th>Short Descriptive Word</th>
                                                                        <th>Definition</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 1 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value[]" class="form-control" placeholder="Short word to describe rating of 1" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 2 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value[]" class="form-control" placeholder="Short word to describe rating of 2" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 3 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value[]" class="form-control" placeholder="Short word to describe rating of 3" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 4 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value[]" class="form-control" placeholder="Short word to describe rating of 4" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 5 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value[]" class="form-control" placeholder="Short word to describe rating of 5" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                   
                                                                </tbody>
                                                            </table>
                                                            <div class="submit-section m-b-0">
                                                                <button class="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- /5 Ratings Content -->

                                                <!-- 10 Ratings Content -->
                                                <div class="form-group" id="10ratings_cont_okr" style="display: none">
                                                    <div class="table-responsive">
                                                        <form>
                                                            <table class="table setting-performance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Rating</th>
                                                                        <th>Short Descriptive Word</th>
                                                                        <th>Definition</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                  
                                                                    <tr>
                                                                        <td style="width: 50px;"> 1 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 1" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 2 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 2" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 3 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 3" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 4 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 4" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 5 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 5" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 6 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 6" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 7 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 7" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 8 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 8" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 9 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 9" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="width: 50px;"> 10 </td>
                                                                        <td style="width: 300px;">
                                                                            <input type="text" name="rating_value_ten[]" class="form-control" placeholder="Short word to describe rating of 10" required="">
                                                                        </td>
                                                                        <td>
                                                                            <textarea rows="3" name="definition_ten[]" class="form-control" placeholder="Descriptive Rating Definition" required=""></textarea>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div class="submit-section">
                                                                <button class="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- 10 Ratings Content -->

                                                <!-- Custom Ratings Content -->
                                                <div class="form-group" id="custom_rating_cont_okr" style="display: none">
                                                    <label>Custom Rating Count</label>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control custom_rating_input" data-type="okr" id="custom_rating_input3" name="custom_rating_count" value="" placeholder="20" style="width: 160px;">
                                                    </div>
                                                    <div class="table-responsive">
                                                        <form>
                                                          
                                                            <table class="table setting-performance-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Rating</th>
                                                                        <th>Short Descriptive Word</th>
                                                                        <th>Definition</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="custom-value_okr">
                                                                </tbody>
                                                            </table>
                                                            <div class="submit-section">
                                                                <button class="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- /Custom Ratings Content -->

                                            </div>
                                            
                                        </div>
                                    </div>
</template>