FROM gitpod/workspace-full-vnc:latest
RUN sudo apt-get update
# Install Cypress-base dependencies
RUN sudo apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0
RUN sudo DEBIAN_FRONTEND=noninteractive apt-get install -yq \
    libgbm-dev \
    libnotify-dev
RUN sudo apt-get install -y \
    libgconf-2-4 \
    libnss3 \
    libxss1
RUN sudo apt-get install -y \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb
RUN sudo apt-get install -y \
    libwebkit-dev
# Install Chromium
RUN sudo apt-get update -q \
    && sudo apt-get install -yq \
    chromium-browser \
    && sudo rm -rf /var/lib/apt/lists/*
