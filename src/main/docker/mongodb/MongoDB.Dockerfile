FROM mongo:4.4.8
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
