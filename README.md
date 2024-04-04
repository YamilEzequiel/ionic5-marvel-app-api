# Ionic 5 & Angular 12

<div style="display: flex">
<img src="https://i.ibb.co/0nnZSd2/M.png" style="width:96px"/>

<div style="padding: 10px;">

Marvel app

https://developer.marvel.com/docs

</div>
</div>

<br>

<img style="width:120px" src="https://i.ibb.co/2cNBZVH/Beige-Book-A-Class-Via-Our-App-Download-Flyer-Poster-1.png">

<br>

# Content

- Angular/cli 12.2.6
- Ionic/angular 5.8.0

# Install

- Set environments key api in environments/environments.ts , there is an example in example.environment.ts

```
npm install
ionic serve
```

- In case error legacy

```
npm i --legacy-peer-deps 
```
# Build

npx cap add android
ionic build --prod
npx cap copy
npx cap open android


# Extra info

- error:0308010C:digital envelope routines::unsupported
  `export NODE_OPTIONS=--openssl-legacy-provider`

- Setting studio patch
  `which android-studio` => pathresult
  `export CAPACITOR_ANDROID_STUDIO_PATH=pathresult`

# Author

Yamil Lazzari
https://www.linkedin.com/in/yamil-lazzari/
