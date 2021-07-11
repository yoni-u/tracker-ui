import serialize from 'serialize-javascript';

export default function template(body, data) {
  return `<!DOCTYPE HTML>
    <html>
<head>
    <meta charset="utf-8">
    <title>Pro MERN Stack</title>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <script src="https://apis.google.com/js/api:client.js"></script>
 <style>
 table.table-hover tr {cursor: pointer;}
 .panel-title a {display: block; width: 100%; cursor: pointer;}
 </style>
</head>
<body>
 <!-- Page generated from template. -->
 <div id="contents">${body}</div>
 <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
 <script src="/env.js"></script>
 <script src="/vendor.bundle.js"></script>
 <script src="/app.bundle.js"></script>
</body>
</html>
`;
}
