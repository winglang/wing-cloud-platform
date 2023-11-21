# Wing Cloud Platform

> Nb: This is WIP and has unstable APIs. All of it might and likely will change without prior notice

## Usage

```
npm install @winglang/wing-cloud-platform
```

```
export WING_ENV=<test|dev|production>
wing compile -t tf-aws -t @winglang/wing-cloud-platform main.w
```

if `WING_ENV` is not present it'll will default to `dev`.

## Dev

```
yarn --version
1.22.21

node --version
v18.17.1

npx projen
```