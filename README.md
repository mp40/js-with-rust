## js-with-rust

Assumes node 16.19.0 and rust installed on machine.

#### install node modules

```
yarn
```

#### build release version of rust

```
yarn build-release-rs
```

#### run JS tests

```
yarn test
```

#### run RS tests

```
yarn test-rs
```

#### run comparison

```
yarn compare
```

#### Notes

```
getNth 20 JS: 0.081ms
JS Get 20 Result >  6765
getNth 20 RS: 1.308ms
RS Get 20 Result >  6765
getNth 78 JS: 0.005ms
JS Get 78 Result >  8944394323791464
getNth 78 RS: 0.248ms
RS Get 78 Result >  8944394323791464
getNth Rec 20 JS: 1.106ms
JS Rec Get 20 Result >  6765
getNth Rec 20 RS: 0.048ms
RS Rec Get 20 Result >  6765
getNth Rec 40 JS: 1.131s
JS Rec Get 40 Result >  102334155
getNth Rec 40 RS: 240.623ms
RS Rec Get 40 Result >  102334155
getNth Rec 45 JS: 12.090s
JS Rec Get 40 Result >  1134903170
getNth Rec 45 RS: 2.667s
RS Rec Get 45 Result >  1134903170
```
