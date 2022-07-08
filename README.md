# React permission

Pruebas de como aplicar permisos a nuestro proyecto de react.

## Desarrollo
```
yarn install
yarn dev
```


## Aplicar el permiso

```
<Can permission={36}>
 // children
</CanYou>

```

## Aplicar el permiso a la ruta

```
<Route path="/" element={
  <PrivateRoute permission={3}>
     <App/>
  </PrivateRoute>
}/>
