import { typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'wing-cloud-platform',
  projenrcTs: true,
  peerDeps: ['@winglang/sdk'],
  description: 'Wing Cloud Platform for testing all the way to production',
  packageName: '@winglang/wing-platform',
  releaseToNpm: true,
  authorOrganization: true,
  authorName: 'Wing',
  authorUrl: 'https://winglang.io',
  gitignore: [
    "**/target"
  ],
});
project.synth();