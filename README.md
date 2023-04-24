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

Works fine with smaller numbers, but not larger.
Example compare result:

```
getNth 20 JS: 0.112ms
JS Get 20 Result >  6765
getNth 20 RS: 0.111ms
RS Get 20 Result >  6765
getNth 100 JS: 0.007ms
JS Get 100 Result >  354224848179262000000
getNth 100 RS: 0.041ms
RS Get 100 Result >  -980107325
```
