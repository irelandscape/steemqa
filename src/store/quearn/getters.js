/*
export const someGetter = (state) => {}
 */

export const release = (state) => {
  return state.release
}

export const serverURL = (state) => {
  return state.serverURL
}

export const config = (state) => {
  return state.config
}

export const removePatterns = (state) => {
  return state.removePatterns
}

export const xss = (state) => {
  return state.xss
}

export const bookmark = (state) => (questionId) => {
  return state.bookmarksByQuestion[questionId]
}

export const bookmarksByQuestion = (state) => {
  return state.bookmarksByQuestion
}

export const topics = (state) => {
  return state.topics
}

export const topicByName = (state) => (name) => {
  for (let topic of state.topics) {
    if (topic.topic.toLowerCase() === name.toLowerCase()) {
      return topic.topic
    }
  }
  return null
}

export const topicStr = (state) => (id) => {
  for (let topic of state.topics) {
    if (topic.id === id) {
      return topic.topic
    }
  }
  return ''
}

export const topicsFromTags = (state) => (tags) => {
  let topics = {
    primary: null,
    secondary: null,
    ternary: null
  }

  let foundTopic = null
  for (let tag of tags) {
    for (let topic of state.topics) {
      if (topic.topic.toLowerCase() === tag.toLowerCase()) {
        foundTopic = topic
        break
      }
    }
  }

  if (foundTopic) {
    if (foundTopic.parent) {
      for (let topic of state.topics) {
        if (topic.id === foundTopic.parent) {
          if (topic.parent) {
            for (let grandparent of state.topics) {
              if (grandparent.id === foundTopic.parent) {
                topics.primary = grandparent
                topics.secondary = topic
                topics.ternary = foundTopic
                break
              }
            }
          } else {
            topics.primary = topic
            topics.secondary = foundTopic
          }
          break
        }
      }
    } else {
      topics.primary = foundTopic
    }
  }

  return topics
}

export const favouriteTopicsById = (state) => {
  return state.favouriteTopicsById
}
