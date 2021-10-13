/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 58351.0, "series": [{"data": [[0.0, 7.0], [0.1, 7.0], [0.2, 7.0], [0.3, 7.0], [0.4, 7.0], [0.5, 7.0], [0.6, 7.0], [0.7, 7.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 8.0], [11.8, 8.0], [11.9, 8.0], [12.0, 8.0], [12.1, 8.0], [12.2, 8.0], [12.3, 8.0], [12.4, 8.0], [12.5, 8.0], [12.6, 8.0], [12.7, 8.0], [12.8, 8.0], [12.9, 8.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 9.0], [14.5, 9.0], [14.6, 9.0], [14.7, 9.0], [14.8, 9.0], [14.9, 9.0], [15.0, 9.0], [15.1, 9.0], [15.2, 9.0], [15.3, 9.0], [15.4, 9.0], [15.5, 9.0], [15.6, 9.0], [15.7, 9.0], [15.8, 9.0], [15.9, 9.0], [16.0, 9.0], [16.1, 9.0], [16.2, 9.0], [16.3, 9.0], [16.4, 9.0], [16.5, 9.0], [16.6, 9.0], [16.7, 9.0], [16.8, 9.0], [16.9, 9.0], [17.0, 9.0], [17.1, 9.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 9.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 9.0], [18.2, 9.0], [18.3, 9.0], [18.4, 9.0], [18.5, 9.0], [18.6, 9.0], [18.7, 9.0], [18.8, 9.0], [18.9, 9.0], [19.0, 9.0], [19.1, 9.0], [19.2, 9.0], [19.3, 9.0], [19.4, 9.0], [19.5, 9.0], [19.6, 9.0], [19.7, 9.0], [19.8, 9.0], [19.9, 9.0], [20.0, 9.0], [20.1, 9.0], [20.2, 9.0], [20.3, 9.0], [20.4, 9.0], [20.5, 9.0], [20.6, 9.0], [20.7, 9.0], [20.8, 9.0], [20.9, 9.0], [21.0, 10.0], [21.1, 10.0], [21.2, 10.0], [21.3, 10.0], [21.4, 10.0], [21.5, 10.0], [21.6, 10.0], [21.7, 10.0], [21.8, 10.0], [21.9, 10.0], [22.0, 10.0], [22.1, 10.0], [22.2, 10.0], [22.3, 10.0], [22.4, 10.0], [22.5, 10.0], [22.6, 10.0], [22.7, 10.0], [22.8, 10.0], [22.9, 10.0], [23.0, 10.0], [23.1, 10.0], [23.2, 10.0], [23.3, 10.0], [23.4, 10.0], [23.5, 10.0], [23.6, 10.0], [23.7, 10.0], [23.8, 10.0], [23.9, 10.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 11.0], [25.7, 11.0], [25.8, 11.0], [25.9, 11.0], [26.0, 11.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 11.0], [26.5, 11.0], [26.6, 11.0], [26.7, 11.0], [26.8, 11.0], [26.9, 11.0], [27.0, 11.0], [27.1, 11.0], [27.2, 11.0], [27.3, 11.0], [27.4, 11.0], [27.5, 11.0], [27.6, 11.0], [27.7, 11.0], [27.8, 11.0], [27.9, 11.0], [28.0, 11.0], [28.1, 11.0], [28.2, 11.0], [28.3, 11.0], [28.4, 11.0], [28.5, 11.0], [28.6, 11.0], [28.7, 11.0], [28.8, 11.0], [28.9, 11.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 13.0], [31.1, 13.0], [31.2, 13.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 13.0], [32.3, 13.0], [32.4, 13.0], [32.5, 13.0], [32.6, 13.0], [32.7, 13.0], [32.8, 13.0], [32.9, 13.0], [33.0, 13.0], [33.1, 13.0], [33.2, 13.0], [33.3, 13.0], [33.4, 13.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 93.0], [34.1, 93.0], [34.2, 93.0], [34.3, 93.0], [34.4, 93.0], [34.5, 93.0], [34.6, 93.0], [34.7, 93.0], [34.8, 93.0], [34.9, 93.0], [35.0, 95.0], [35.1, 95.0], [35.2, 95.0], [35.3, 95.0], [35.4, 95.0], [35.5, 95.0], [35.6, 95.0], [35.7, 95.0], [35.8, 95.0], [35.9, 95.0], [36.0, 97.0], [36.1, 97.0], [36.2, 97.0], [36.3, 97.0], [36.4, 97.0], [36.5, 97.0], [36.6, 97.0], [36.7, 97.0], [36.8, 97.0], [36.9, 97.0], [37.0, 98.0], [37.1, 98.0], [37.2, 98.0], [37.3, 98.0], [37.4, 98.0], [37.5, 98.0], [37.6, 98.0], [37.7, 98.0], [37.8, 98.0], [37.9, 98.0], [38.0, 98.0], [38.1, 98.0], [38.2, 98.0], [38.3, 98.0], [38.4, 98.0], [38.5, 98.0], [38.6, 98.0], [38.7, 98.0], [38.8, 98.0], [38.9, 98.0], [39.0, 3274.0], [39.1, 3274.0], [39.2, 3274.0], [39.3, 3274.0], [39.4, 3274.0], [39.5, 3274.0], [39.6, 3274.0], [39.7, 3274.0], [39.8, 3274.0], [39.9, 3274.0], [40.0, 5208.0], [40.1, 5208.0], [40.2, 5208.0], [40.3, 5208.0], [40.4, 5208.0], [40.5, 5208.0], [40.6, 5208.0], [40.7, 5208.0], [40.8, 5208.0], [40.9, 5208.0], [41.0, 5208.0], [41.1, 5208.0], [41.2, 5208.0], [41.3, 5208.0], [41.4, 5208.0], [41.5, 5208.0], [41.6, 5208.0], [41.7, 5208.0], [41.8, 5208.0], [41.9, 5208.0], [42.0, 5208.0], [42.1, 5208.0], [42.2, 5208.0], [42.3, 5208.0], [42.4, 5208.0], [42.5, 5208.0], [42.6, 5208.0], [42.7, 5208.0], [42.8, 5208.0], [42.9, 5208.0], [43.0, 5213.0], [43.1, 5213.0], [43.2, 5213.0], [43.3, 5213.0], [43.4, 5213.0], [43.5, 5213.0], [43.6, 5213.0], [43.7, 5213.0], [43.8, 5213.0], [43.9, 5213.0], [44.0, 5214.0], [44.1, 5214.0], [44.2, 5214.0], [44.3, 5214.0], [44.4, 5214.0], [44.5, 5214.0], [44.6, 5214.0], [44.7, 5214.0], [44.8, 5214.0], [44.9, 5214.0], [45.0, 7975.0], [45.1, 7975.0], [45.2, 7975.0], [45.3, 7975.0], [45.4, 7975.0], [45.5, 7975.0], [45.6, 7975.0], [45.7, 7975.0], [45.8, 7975.0], [45.9, 7975.0], [46.0, 10854.0], [46.1, 10854.0], [46.2, 10854.0], [46.3, 10854.0], [46.4, 10854.0], [46.5, 10854.0], [46.6, 10854.0], [46.7, 10854.0], [46.8, 10854.0], [46.9, 10854.0], [47.0, 13873.0], [47.1, 13873.0], [47.2, 13873.0], [47.3, 13873.0], [47.4, 13873.0], [47.5, 13873.0], [47.6, 13873.0], [47.7, 13873.0], [47.8, 13873.0], [47.9, 13873.0], [48.0, 19412.0], [48.1, 19412.0], [48.2, 19412.0], [48.3, 19412.0], [48.4, 19412.0], [48.5, 19412.0], [48.6, 19412.0], [48.7, 19412.0], [48.8, 19412.0], [48.9, 19412.0], [49.0, 23165.0], [49.1, 23165.0], [49.2, 23165.0], [49.3, 23165.0], [49.4, 23165.0], [49.5, 23165.0], [49.6, 23165.0], [49.7, 23165.0], [49.8, 23165.0], [49.9, 23165.0], [50.0, 23178.0], [50.1, 23178.0], [50.2, 23178.0], [50.3, 23178.0], [50.4, 23178.0], [50.5, 23178.0], [50.6, 23178.0], [50.7, 23178.0], [50.8, 23178.0], [50.9, 23178.0], [51.0, 23204.0], [51.1, 23204.0], [51.2, 23204.0], [51.3, 23204.0], [51.4, 23204.0], [51.5, 23204.0], [51.6, 23204.0], [51.7, 23204.0], [51.8, 23204.0], [51.9, 23204.0], [52.0, 25697.0], [52.1, 25697.0], [52.2, 25697.0], [52.3, 25697.0], [52.4, 25697.0], [52.5, 25697.0], [52.6, 25697.0], [52.7, 25697.0], [52.8, 25697.0], [52.9, 25697.0], [53.0, 26683.0], [53.1, 26683.0], [53.2, 26683.0], [53.3, 26683.0], [53.4, 26683.0], [53.5, 26683.0], [53.6, 26683.0], [53.7, 26683.0], [53.8, 26683.0], [53.9, 26683.0], [54.0, 31952.0], [54.1, 31952.0], [54.2, 31952.0], [54.3, 31952.0], [54.4, 31952.0], [54.5, 31952.0], [54.6, 31952.0], [54.7, 31952.0], [54.8, 31952.0], [54.9, 31952.0], [55.0, 34122.0], [55.1, 34122.0], [55.2, 34122.0], [55.3, 34122.0], [55.4, 34122.0], [55.5, 34122.0], [55.6, 34122.0], [55.7, 34122.0], [55.8, 34122.0], [55.9, 34122.0], [56.0, 35343.0], [56.1, 35343.0], [56.2, 35343.0], [56.3, 35343.0], [56.4, 35343.0], [56.5, 35343.0], [56.6, 35343.0], [56.7, 35343.0], [56.8, 35343.0], [56.9, 35343.0], [57.0, 35557.0], [57.1, 35557.0], [57.2, 35557.0], [57.3, 35557.0], [57.4, 35557.0], [57.5, 35557.0], [57.6, 35557.0], [57.7, 35557.0], [57.8, 35557.0], [57.9, 35557.0], [58.0, 35778.0], [58.1, 35778.0], [58.2, 35778.0], [58.3, 35778.0], [58.4, 35778.0], [58.5, 35778.0], [58.6, 35778.0], [58.7, 35778.0], [58.8, 35778.0], [58.9, 35778.0], [59.0, 36328.0], [59.1, 36328.0], [59.2, 36328.0], [59.3, 36328.0], [59.4, 36328.0], [59.5, 36328.0], [59.6, 36328.0], [59.7, 36328.0], [59.8, 36328.0], [59.9, 36328.0], [60.0, 36528.0], [60.1, 36528.0], [60.2, 36528.0], [60.3, 36528.0], [60.4, 36528.0], [60.5, 36528.0], [60.6, 36528.0], [60.7, 36528.0], [60.8, 36528.0], [60.9, 36528.0], [61.0, 37028.0], [61.1, 37028.0], [61.2, 37028.0], [61.3, 37028.0], [61.4, 37028.0], [61.5, 37028.0], [61.6, 37028.0], [61.7, 37028.0], [61.8, 37028.0], [61.9, 37028.0], [62.0, 37193.0], [62.1, 37193.0], [62.2, 37193.0], [62.3, 37193.0], [62.4, 37193.0], [62.5, 37193.0], [62.6, 37193.0], [62.7, 37193.0], [62.8, 37193.0], [62.9, 37193.0], [63.0, 37413.0], [63.1, 37413.0], [63.2, 37413.0], [63.3, 37413.0], [63.4, 37413.0], [63.5, 37413.0], [63.6, 37413.0], [63.7, 37413.0], [63.8, 37413.0], [63.9, 37413.0], [64.0, 37429.0], [64.1, 37429.0], [64.2, 37429.0], [64.3, 37429.0], [64.4, 37429.0], [64.5, 37429.0], [64.6, 37429.0], [64.7, 37429.0], [64.8, 37429.0], [64.9, 37429.0], [65.0, 37601.0], [65.1, 37601.0], [65.2, 37601.0], [65.3, 37601.0], [65.4, 37601.0], [65.5, 37601.0], [65.6, 37601.0], [65.7, 37601.0], [65.8, 37601.0], [65.9, 37601.0], [66.0, 37802.0], [66.1, 37802.0], [66.2, 37802.0], [66.3, 37802.0], [66.4, 37802.0], [66.5, 37802.0], [66.6, 37802.0], [66.7, 37802.0], [66.8, 37802.0], [66.9, 37802.0], [67.0, 37920.0], [67.1, 37920.0], [67.2, 37920.0], [67.3, 37920.0], [67.4, 37920.0], [67.5, 37920.0], [67.6, 37920.0], [67.7, 37920.0], [67.8, 37920.0], [67.9, 37920.0], [68.0, 38027.0], [68.1, 38027.0], [68.2, 38027.0], [68.3, 38027.0], [68.4, 38027.0], [68.5, 38027.0], [68.6, 38027.0], [68.7, 38027.0], [68.8, 38027.0], [68.9, 38027.0], [69.0, 38164.0], [69.1, 38164.0], [69.2, 38164.0], [69.3, 38164.0], [69.4, 38164.0], [69.5, 38164.0], [69.6, 38164.0], [69.7, 38164.0], [69.8, 38164.0], [69.9, 38164.0], [70.0, 38439.0], [70.1, 38439.0], [70.2, 38439.0], [70.3, 38439.0], [70.4, 38439.0], [70.5, 38439.0], [70.6, 38439.0], [70.7, 38439.0], [70.8, 38439.0], [70.9, 38439.0], [71.0, 39371.0], [71.1, 39371.0], [71.2, 39371.0], [71.3, 39371.0], [71.4, 39371.0], [71.5, 39371.0], [71.6, 39371.0], [71.7, 39371.0], [71.8, 39371.0], [71.9, 39371.0], [72.0, 39448.0], [72.1, 39448.0], [72.2, 39448.0], [72.3, 39448.0], [72.4, 39448.0], [72.5, 39448.0], [72.6, 39448.0], [72.7, 39448.0], [72.8, 39448.0], [72.9, 39448.0], [73.0, 39574.0], [73.1, 39574.0], [73.2, 39574.0], [73.3, 39574.0], [73.4, 39574.0], [73.5, 39574.0], [73.6, 39574.0], [73.7, 39574.0], [73.8, 39574.0], [73.9, 39574.0], [74.0, 39591.0], [74.1, 39591.0], [74.2, 39591.0], [74.3, 39591.0], [74.4, 39591.0], [74.5, 39591.0], [74.6, 39591.0], [74.7, 39591.0], [74.8, 39591.0], [74.9, 39591.0], [75.0, 39874.0], [75.1, 39874.0], [75.2, 39874.0], [75.3, 39874.0], [75.4, 39874.0], [75.5, 39874.0], [75.6, 39874.0], [75.7, 39874.0], [75.8, 39874.0], [75.9, 39874.0], [76.0, 39940.0], [76.1, 39940.0], [76.2, 39940.0], [76.3, 39940.0], [76.4, 39940.0], [76.5, 39940.0], [76.6, 39940.0], [76.7, 39940.0], [76.8, 39940.0], [76.9, 39940.0], [77.0, 40062.0], [77.1, 40062.0], [77.2, 40062.0], [77.3, 40062.0], [77.4, 40062.0], [77.5, 40062.0], [77.6, 40062.0], [77.7, 40062.0], [77.8, 40062.0], [77.9, 40062.0], [78.0, 41796.0], [78.1, 41796.0], [78.2, 41796.0], [78.3, 41796.0], [78.4, 41796.0], [78.5, 41796.0], [78.6, 41796.0], [78.7, 41796.0], [78.8, 41796.0], [78.9, 41796.0], [79.0, 41886.0], [79.1, 41886.0], [79.2, 41886.0], [79.3, 41886.0], [79.4, 41886.0], [79.5, 41886.0], [79.6, 41886.0], [79.7, 41886.0], [79.8, 41886.0], [79.9, 41886.0], [80.0, 42443.0], [80.1, 42443.0], [80.2, 42443.0], [80.3, 42443.0], [80.4, 42443.0], [80.5, 42443.0], [80.6, 42443.0], [80.7, 42443.0], [80.8, 42443.0], [80.9, 42443.0], [81.0, 42465.0], [81.1, 42465.0], [81.2, 42465.0], [81.3, 42465.0], [81.4, 42465.0], [81.5, 42465.0], [81.6, 42465.0], [81.7, 42465.0], [81.8, 42465.0], [81.9, 42465.0], [82.0, 43697.0], [82.1, 43697.0], [82.2, 43697.0], [82.3, 43697.0], [82.4, 43697.0], [82.5, 43697.0], [82.6, 43697.0], [82.7, 43697.0], [82.8, 43697.0], [82.9, 43697.0], [83.0, 43717.0], [83.1, 43717.0], [83.2, 43717.0], [83.3, 43717.0], [83.4, 43717.0], [83.5, 43717.0], [83.6, 43717.0], [83.7, 43717.0], [83.8, 43717.0], [83.9, 43717.0], [84.0, 44068.0], [84.1, 44068.0], [84.2, 44068.0], [84.3, 44068.0], [84.4, 44068.0], [84.5, 44068.0], [84.6, 44068.0], [84.7, 44068.0], [84.8, 44068.0], [84.9, 44068.0], [85.0, 45098.0], [85.1, 45098.0], [85.2, 45098.0], [85.3, 45098.0], [85.4, 45098.0], [85.5, 45098.0], [85.6, 45098.0], [85.7, 45098.0], [85.8, 45098.0], [85.9, 45098.0], [86.0, 45124.0], [86.1, 45124.0], [86.2, 45124.0], [86.3, 45124.0], [86.4, 45124.0], [86.5, 45124.0], [86.6, 45124.0], [86.7, 45124.0], [86.8, 45124.0], [86.9, 45124.0], [87.0, 45146.0], [87.1, 45146.0], [87.2, 45146.0], [87.3, 45146.0], [87.4, 45146.0], [87.5, 45146.0], [87.6, 45146.0], [87.7, 45146.0], [87.8, 45146.0], [87.9, 45146.0], [88.0, 45355.0], [88.1, 45355.0], [88.2, 45355.0], [88.3, 45355.0], [88.4, 45355.0], [88.5, 45355.0], [88.6, 45355.0], [88.7, 45355.0], [88.8, 45355.0], [88.9, 45355.0], [89.0, 45839.0], [89.1, 45839.0], [89.2, 45839.0], [89.3, 45839.0], [89.4, 45839.0], [89.5, 45839.0], [89.6, 45839.0], [89.7, 45839.0], [89.8, 45839.0], [89.9, 45839.0], [90.0, 45903.0], [90.1, 45903.0], [90.2, 45903.0], [90.3, 45903.0], [90.4, 45903.0], [90.5, 45903.0], [90.6, 45903.0], [90.7, 45903.0], [90.8, 45903.0], [90.9, 45903.0], [91.0, 46419.0], [91.1, 46419.0], [91.2, 46419.0], [91.3, 46419.0], [91.4, 46419.0], [91.5, 46419.0], [91.6, 46419.0], [91.7, 46419.0], [91.8, 46419.0], [91.9, 46419.0], [92.0, 48768.0], [92.1, 48768.0], [92.2, 48768.0], [92.3, 48768.0], [92.4, 48768.0], [92.5, 48768.0], [92.6, 48768.0], [92.7, 48768.0], [92.8, 48768.0], [92.9, 48768.0], [93.0, 49254.0], [93.1, 49254.0], [93.2, 49254.0], [93.3, 49254.0], [93.4, 49254.0], [93.5, 49254.0], [93.6, 49254.0], [93.7, 49254.0], [93.8, 49254.0], [93.9, 49254.0], [94.0, 49391.0], [94.1, 49391.0], [94.2, 49391.0], [94.3, 49391.0], [94.4, 49391.0], [94.5, 49391.0], [94.6, 49391.0], [94.7, 49391.0], [94.8, 49391.0], [94.9, 49391.0], [95.0, 50393.0], [95.1, 50393.0], [95.2, 50393.0], [95.3, 50393.0], [95.4, 50393.0], [95.5, 50393.0], [95.6, 50393.0], [95.7, 50393.0], [95.8, 50393.0], [95.9, 50393.0], [96.0, 51229.0], [96.1, 51229.0], [96.2, 51229.0], [96.3, 51229.0], [96.4, 51229.0], [96.5, 51229.0], [96.6, 51229.0], [96.7, 51229.0], [96.8, 51229.0], [96.9, 51229.0], [97.0, 52508.0], [97.1, 52508.0], [97.2, 52508.0], [97.3, 52508.0], [97.4, 52508.0], [97.5, 52508.0], [97.6, 52508.0], [97.7, 52508.0], [97.8, 52508.0], [97.9, 52508.0], [98.0, 54901.0], [98.1, 54901.0], [98.2, 54901.0], [98.3, 54901.0], [98.4, 54901.0], [98.5, 54901.0], [98.6, 54901.0], [98.7, 54901.0], [98.8, 54901.0], [98.9, 54901.0], [99.0, 58351.0], [99.1, 58351.0], [99.2, 58351.0], [99.3, 58351.0], [99.4, 58351.0], [99.5, 58351.0], [99.6, 58351.0], [99.7, 58351.0], [99.8, 58351.0], [99.9, 58351.0]], "isOverall": false, "label": "HTTP 요청", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 39.0, "series": [{"data": [[0.0, 39.0], [3200.0, 1.0], [5200.0, 5.0], [7900.0, 1.0], [10800.0, 1.0], [13800.0, 1.0], [19400.0, 1.0], [23200.0, 1.0], [23100.0, 2.0], [26600.0, 1.0], [25600.0, 1.0], [31900.0, 1.0], [34100.0, 1.0], [35300.0, 1.0], [36500.0, 1.0], [36300.0, 1.0], [35700.0, 1.0], [35500.0, 1.0], [37000.0, 1.0], [37400.0, 2.0], [38400.0, 1.0], [37100.0, 1.0], [38000.0, 1.0], [37800.0, 1.0], [37600.0, 1.0], [38100.0, 1.0], [37900.0, 1.0], [39300.0, 1.0], [40000.0, 1.0], [39900.0, 1.0], [39800.0, 1.0], [39400.0, 1.0], [39500.0, 2.0], [41800.0, 1.0], [42400.0, 2.0], [41700.0, 1.0], [43600.0, 1.0], [43700.0, 1.0], [44000.0, 1.0], [45000.0, 1.0], [45100.0, 2.0], [45300.0, 1.0], [46400.0, 1.0], [45900.0, 1.0], [45800.0, 1.0], [48700.0, 1.0], [49200.0, 1.0], [50300.0, 1.0], [49300.0, 1.0], [52500.0, 1.0], [51200.0, 1.0], [54900.0, 1.0], [58300.0, 1.0]], "isOverall": false, "label": "HTTP 요청", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 58300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 49.0, "minX": 2.0, "ticks": [[0, "요청 수 \n(응답시간 <= 500ms)"], [1, "요청 수 \n(응답시간 > 500ms 및 <= 1,500ms)"], [2, "요청 수 \n(응답시간 > 1,500ms)"], [3, "오류 발생 요청"]], "maxY": 51.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "요청 수 \n(응답시간 <= 500ms)", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "요청 수 \n(응답시간 > 500ms 및 <= 1,500ms)", "isController": false}, {"data": [[2.0, 51.0]], "color": "orange", "isOverall": false, "label": "요청 수 \n(응답시간 > 1,500ms)", "isController": false}, {"data": [[3.0, 49.0]], "color": "#FF6347", "isOverall": false, "label": "오류 발생 요청", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.636363636363636, "minX": 1.63414188E12, "maxY": 5.0, "series": [{"data": [[1.63414224E12, 5.0], [1.63414194E12, 5.0], [1.63414212E12, 5.0], [1.6341423E12, 4.636363636363636], [1.634142E12, 5.0], [1.63414218E12, 5.0], [1.63414188E12, 5.0], [1.63414206E12, 5.0]], "isOverall": false, "label": "쓰레드 그룹", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6341423E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 7.0, "minX": 1.0, "maxY": 23242.65217391304, "series": [{"data": [[4.0, 9.666666666666666], [2.0, 7.0], [1.0, 9.0], [5.0, 23242.65217391304], [3.0, 10.333333333333334]], "isOverall": false, "label": "HTTP 요청", "isController": false}, {"data": [[4.84, 21383.999999999993]], "isOverall": false, "label": "HTTP 요청-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.63414188E12, "maxY": 142358.5, "series": [{"data": [[1.63414224E12, 85618.18333333333], [1.63414194E12, 85415.1], [1.63414212E12, 71179.25], [1.6341423E12, 1926.2333333333333], [1.634142E12, 128122.65], [1.63414218E12, 142358.5], [1.63414188E12, 99650.95], [1.63414206E12, 113886.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63414224E12, 13.3], [1.63414194E12, 13.3], [1.63414212E12, 11.083333333333334], [1.6341423E12, 0.0], [1.634142E12, 19.95], [1.63414218E12, 22.166666666666668], [1.63414188E12, 15.516666666666667], [1.63414206E12, 17.733333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6341423E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 610.2272727272724, "minX": 1.63414188E12, "maxY": 45472.88888888889, "series": [{"data": [[1.63414224E12, 29894.81818181818], [1.63414194E12, 44889.833333333336], [1.63414212E12, 39537.2], [1.6341423E12, 610.2272727272724], [1.634142E12, 45472.88888888889], [1.63414218E12, 37400.399999999994], [1.63414188E12, 31103.714285714283], [1.63414206E12, 39337.00000000001]], "isOverall": false, "label": "HTTP 요청", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6341423E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.63414188E12, "maxY": 45055.11111111111, "series": [{"data": [[1.63414224E12, 19821.090909090908], [1.63414194E12, 44559.0], [1.63414212E12, 38997.2], [1.6341423E12, 0.0], [1.634142E12, 45055.11111111111], [1.63414218E12, 36985.1], [1.63414188E12, 30624.285714285717], [1.63414206E12, 38934.37499999999]], "isOverall": false, "label": "HTTP 요청", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6341423E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 12.625, "minX": 1.63414188E12, "maxY": 40.714285714285715, "series": [{"data": [[1.63414224E12, 19.90909090909091], [1.63414194E12, 24.666666666666668], [1.63414212E12, 30.6], [1.6341423E12, 19.954545454545464], [1.634142E12, 21.444444444444443], [1.63414218E12, 15.300000000000002], [1.63414188E12, 40.714285714285715], [1.63414206E12, 12.625]], "isOverall": false, "label": "HTTP 요청", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6341423E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 7975.0, "minX": 1.63414188E12, "maxY": 58351.0, "series": [{"data": [[1.63414224E12, 39591.0], [1.63414194E12, 52508.0], [1.63414212E12, 40062.0], [1.634142E12, 49391.0], [1.63414218E12, 38164.0], [1.63414188E12, 42443.0], [1.63414206E12, 58351.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63414224E12, 39591.0], [1.63414194E12, 52508.0], [1.63414212E12, 40062.0], [1.634142E12, 49391.0], [1.63414218E12, 38150.3], [1.63414188E12, 42443.0], [1.63414206E12, 58351.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63414224E12, 39591.0], [1.63414194E12, 52508.0], [1.63414212E12, 40062.0], [1.634142E12, 49391.0], [1.63414218E12, 38164.0], [1.63414188E12, 42443.0], [1.63414206E12, 58351.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63414224E12, 39591.0], [1.63414194E12, 52508.0], [1.63414212E12, 40062.0], [1.634142E12, 49391.0], [1.63414218E12, 38164.0], [1.63414188E12, 42443.0], [1.63414206E12, 58351.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63414224E12, 34122.0], [1.63414194E12, 26683.0], [1.63414212E12, 38439.0], [1.634142E12, 43697.0], [1.63414218E12, 36328.0], [1.63414188E12, 7975.0], [1.63414206E12, 13873.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63414224E12, 37613.0], [1.63414194E12, 47304.5], [1.63414212E12, 39874.0], [1.634142E12, 45124.0], [1.63414218E12, 37507.0], [1.63414188E12, 37429.0], [1.63414206E12, 45616.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63414224E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 10.0, "minX": 1.0, "maxY": 45111.0, "series": [{"data": [[1.0, 37802.0], [4.0, 43070.0], [2.0, 45111.0], [3.0, 39019.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 23178.0], [44.0, 10.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 44714.5, "series": [{"data": [[1.0, 37420.0], [4.0, 42451.0], [2.0, 44714.5], [3.0, 38318.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 0.0], [44.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.63414182E12, "maxY": 0.65, "series": [{"data": [[1.63414224E12, 0.18333333333333332], [1.63414194E12, 0.1], [1.63414212E12, 0.08333333333333333], [1.63414182E12, 0.08333333333333333], [1.6341423E12, 0.65], [1.634142E12, 0.15], [1.63414218E12, 0.16666666666666666], [1.63414188E12, 0.11666666666666667], [1.63414206E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6341423E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.63414188E12, "maxY": 0.65, "series": [{"data": [[1.63414224E12, 0.1], [1.63414194E12, 0.1], [1.63414212E12, 0.08333333333333333], [1.634142E12, 0.15], [1.63414218E12, 0.16666666666666666], [1.63414188E12, 0.11666666666666667], [1.63414206E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6341423E12, 0.65]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.63414224E12, 0.08333333333333333], [1.6341423E12, 0.08333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6341423E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.63414188E12, "maxY": 0.7333333333333333, "series": [{"data": [[1.63414224E12, 0.1], [1.63414194E12, 0.1], [1.63414212E12, 0.08333333333333333], [1.634142E12, 0.15], [1.63414218E12, 0.16666666666666666], [1.63414188E12, 0.11666666666666667], [1.63414206E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP 요청-success", "isController": false}, {"data": [[1.63414224E12, 0.08333333333333333], [1.6341423E12, 0.7333333333333333]], "isOverall": false, "label": "HTTP 요청-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6341423E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.63414188E12, "maxY": 0.7333333333333333, "series": [{"data": [[1.63414224E12, 0.1], [1.63414194E12, 0.1], [1.63414212E12, 0.08333333333333333], [1.634142E12, 0.15], [1.63414218E12, 0.16666666666666666], [1.63414188E12, 0.11666666666666667], [1.63414206E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.63414224E12, 0.08333333333333333], [1.6341423E12, 0.7333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6341423E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

