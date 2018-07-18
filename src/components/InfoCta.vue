<template>
  <v-flex
    grey
    lighten-3
    xs12
    pa-3
    style="padding-bottom: 148px !important;"
  >
    <v-card
      class="mx-auto"
      tile
      flat
      style="max-width: 700px;"
    >
      <v-card-title class="headline">Please Read</v-card-title>
      <v-card-text>
        <p>
          Welcome to the <a href="https://vuetifyjs.com" target="_blank">Vuetify</a> issue generator. If you have a <strong>bug</strong> or a <strong>feature request</strong>, please fill out the information below.
        </p>
        <p>
          Any issues created that do not use this form will be closed immediately.
        </p>
        <p>
          Before submitting an issue:
        </p>
        <ul>
          <li>
            Search the repo and ensure your issue doesn't already exist. If so it may:
            <ul>
              <li>Have already been fixed in an unreleased version</li>
              <li>Have been closed without a solution. Please create a new issue instead of commenting on the old one</li>
            </ul>
          </li>
          <li>
            Create a minimal reproduction to illustrate the issue. Here's a [CodePen template]() to start you off
            <ul>
              <li>If you need a full project to reproduce, consider using [CodeSandbox]()</li>
            </ul>
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
