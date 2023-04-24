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

### Notes

Works fine with smaller numbers, but not larger.<br/>
Example compare result:

```
getNth 20 JS: 0.098ms
JS Get 20 Result >  6765
getNth 20 RS: 0.106ms
RS Get 20 Result >  6765
getNth 78 JS: 0.005ms
JS Get 78 Result >  8944394323791464
getNth 78 RS: 0.033ms
RS Get 78 Result >  375819880
```
