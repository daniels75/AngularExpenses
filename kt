diff --git a/app/index.html b/app/index.html
index 1132aef..c114756 100644
--- a/app/index.html
+++ b/app/index.html
@@ -40,10 +40,13 @@
             <li ng-class="{active:isNavbarActive('myroute')}" ng-click="updateCurrentPage('myroute')"><a ng-href="#myroute">MyRoute</a></li>
             <li ng-class="{active:isNavbarActive('user')}" ng-click="updateCurrentPage('user')"><a ng-href="#user">User</a></li>
           </ul>
+                 <login-toolbar></login-toolbar>
         </div><!--/.nav-collapse -->
+        
       </div>
     </div>
 
+
       <!--
     <div class="header">
       <ul class="nav nav-pills pull-right">
@@ -57,6 +60,7 @@
      
     <div class="container" ng-view=""></div>
 
+
   <hr />
 
 <!--
@@ -100,11 +104,16 @@
     <!-- endbuild -->
 
         <!-- build:js({.tmp,app}) scripts/scripts.js -->
+        <script src="scripts/bootstrap.js"></script>
         <script src="scripts/app.js"></script>
+        <script src="scripts/example.js"></script>
+
         <script src="scripts/controllers/main.js"></script>
         <script src="scripts/controllers/myroute.js"></script>
         <script src="scripts/controllers/usercontroller.js"></script>
         <script src="scripts/directives/ng-google-chart.js"></script>
+       
+
         <!-- endbuild -->
 </body>
 </html>
