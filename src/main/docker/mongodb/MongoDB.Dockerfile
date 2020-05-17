FROM mongo:4.2.6
ADD mongodb/scripts/init_replicaset.js init_replicaset.js
