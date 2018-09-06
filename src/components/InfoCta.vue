<template>
  <v-flex
    grey
    lighten-3
    xs12
    mx-auto
    px-3
    style="padding: 48px 0 96px"
  >
    <v-expansion-panel
      class="mx-auto"
      popout
      style="max-width: 700px;"
    >
      <v-expansion-panel-content>
        <div slot="header" class="body-2 primary--text">
          <span>Please Read</span>
        </div>
        <v-card height="300px">
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
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>
