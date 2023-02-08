<template>
<div class="tab-pane" id="smart_goals_tab">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Smart Goals Configuration</label>
                                                    <textarea rows="4" cols="5" class="form-control" name="smart_goals">A 360-degree assessment can also be added to capture ratings and feedback</textarea>
                                                </div>
                                                <div class="submit-section my-3">                           
                                                    <button class="btn btn-primary submit-btn performance_status " data-status="smart_goals" title="">Activate SMART Goals</button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr style="margin-top:0;">
                                        <div class="form-group m-b-0">
                                            <label>Choose Your Rating Scale</label>
                                            <div class="radio_input" id="rating_scale_select">
                                                <label class="radio-inline custom_radio">
                                                <input type="radio" name="rating_scale_smart_goal" value="rating_1_5" required="" class="rating_scale" checked="">1 - 5 <span class="checkmark"></span>
                                                </label>
                                                <label class="radio-inline custom_radio">
                                                <input type="radio" name="rating_scale_smart_goal" value="rating_1_10" class="rating_scale">1 - 10 <span class="checkmark"></span>
                                                </label>
                                                <label class="radio-inline custom_radio">
                                                <input type="radio" name="rating_scale_smart_goal" value="custom_rating" class="rating_scale">Custom <span class="checkmark"></span>
                                                </label> 
                                            </div>
                                        </div>

                                        <!-- 5 Ratings Content -->
                                        <div class="form-group" id="5ratings_cont" style="display: block">
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
                                                                   
                                                                    <input type="text" name="rating_value[]" class="form-control" value="very bad" placeholder="Short word to describe rating of 1" required="">
                                                                </td>
                                                                <td>
                                                                    <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required="">very bad</textarea>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="width: 50px;"> 2 </td>
                                                                <td style="width: 300px;">
                                                                  
                                                                    <input type="text" name="rating_value[]" class="form-control" value="bad" placeholder="Short word to describe rating of 2" required="">
                                                                </td>
                                                                <td>
                                                                    <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required="">bad</textarea>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="width: 50px;"> 3 </td>
                                                                <td style="width: 300px;">
                                                                   
                                                                    <input type="text" name="rating_value[]" class="form-control" value="Average" placeholder="Short word to describe rating of 3" required="">
                                                                </td>
                                                                <td>
                                                                    <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required="">Average</textarea>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="width: 50px;"> 4 </td>
                                                                <td style="width: 300px;">
                                                                    
                                                                    <input type="text" name="rating_value[]" class="form-control" value="Good" placeholder="Short word to describe rating of 4" required="">
                                                                </td>
                                                                <td>
                                                                    <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required="">Good</textarea>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="width: 50px;"> 5 </td>
                                                                <td style="width: 300px;">
                                                                   
                                                                    <input type="text" name="rating_value[]" class="form-control" value="Very Good" placeholder="Short word to describe rating of 5" required="">
                                                                </td>
                                                                <td>
                                                                    <textarea rows="3" name="definition[]" class="form-control" placeholder="Descriptive Rating Definition" required="">Very Good</textarea>
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
                                        <div class="form-group" id="10ratings_cont" style="display: none">
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
                                                    <div class="submit-section m-b-0">
                                                        <button class="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- 10 Ratings Content -->

                                        <!-- Custom Ratings Content -->
                                        <div class="form-group" id="custom_rating_cont" style="display: none">
                                            <label>Custom Rating Count</label>
                                            <div class="form-group">
                                                <input type="text" class="form-control custom_rating_input" data-type="smart_goal" id="custom_rating_input2" name="custom_rating_count" value="" placeholder="20" style="width: 160px;">
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
                                                        <tbody class="custom-value_smart_goal">
                                                        </tbody>
                                                    </table>
                                                    <div class="submit-section m-b-0">
                                                        <button class="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- /Custom Ratings Content -->

                                </div>
</template>