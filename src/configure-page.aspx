<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Custom Actions Configuration</title>
    <script src="//ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js" type="text/javascript"></script>
    <script src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js" type="text/javascript"></script>
</head>
<body style="display: none">

    <!-- Chrome control placeholder -->
    <div id="chrome_ctrl_placeholder"></div>
    <!-- The chrome control also makes the SharePoint
          Website style sheet available to your page. -->
    <div id="MainContent" style="padding-left:20px;">
        <h1 class="ms-accentText">User Custom Actions Configuration</h1>
        This page lists the current user custom actions configured for the current site and site collection.
        <br />
        <br />

        <h2 class="ms-accentText">Site Collection User Custom Actions</h2>        
        <ul id="site-user-custom-actions">            
        </ul>

        <br />

        <h2 class="ms-accentText">Site User Custom Actions</h2>
        <ul id="web-user-custom-actions">            
        </ul>

        <br />

        <h2 class="ms-accentText">Install User Custom Action</h2>

        <br />

        <div class="left">
            <label for="scriptlink-id" style="display:block;float:left;width:165px;">ID (usually leave blank)</label>
            <label for="scriptlink-name" style="display:block;float:left;width:315px;">Url (e.g. SiteAssets/hello.js)</label>
            <label for="scriptlink-sequence" style="display:block;float:left;width:165px;">Sequence (e.g. 1000)</label>
        </div>
        
        <div class="clear-left left">
            <input type="text" id="scriptlink-id" style="width:150px;" />
            <input type="text" id="scriptlink-name" style="width:300px;" />
            <input type="number" id="scriptlink-sequence" style="width:150px;" value="1000" />
        </div>
        <div class="clear-left left">
            <button id="install-site-user-custom-action" type="button">Install Site Collection</button>
            <button id="uninstall-site-user-custom-action" type="button">Uninstall Site Collection</button>
            
            <br />

            <button id="install-web-user-custom-action" type="button">Install Current Web</button>
            <button id="uninstall-web-user-custom-action" type="button">Uninstall Current Web</button>            
        </div>

        <br />
        <br />

    </div>


</body>
</html>
