<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <base href="/" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css">
        <link rel="stylesheet" href="/assets/css/line-awesome.min.css">
        <link rel="shortcut icon" href="/assets/img/favicon.png">
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
        <link href="/assets/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css">
        <link href="/assets/css/style.css" rel="stylesheet"> 
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="/assets/js/Chart.min.js"></script>
        <title>Dashboard-HRMS admin template</title>
    </head>
    
    <body class="antialiased">
            <div id="app">
                <script src="{{ mix('/assets/js/app.js') }}"></script>
            </div>
    </body>
</html>
