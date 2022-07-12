---
title: HTTPS Usage
generalDocs: true
---

api.data.gov requires HTTPS connections use for new users and APIs.

## JVM Keystore

If you're using a JVM based client for accessing our APIs, you may experience issues trusting our SSL certificate. JVM clients include code written in Java, Clojure, ColdFusion, Groovy, Scala. While our certificate is trusted by most systems and browsers, our certificate may not be trusted by the separate keystore that the JVM uses.

This should be resolved by future [JVM updates](https://bugs.openjdk.java.net/browse/JDK-8154757), but if you're running into the issue, you can resolve it by manually adding the root certificate to the JVM keystore. To manually add the root certificate to the JVM keystore:

1. Download the "DST Root CA X3" certificate to a file named `dst-root-ca-x3.pem`:

   ```sh
   $ curl "https://ssl-tools.net/certificates/dac9024f54d8f6df94935fb1732638ca6ad77c13.pem" \
       > dst-root-ca-x3.pem
   ```

2. You should be careful when adding certificates to your keystore. The `dst-root-ca-x3.pem` file should have a SHA256 checksum of `139a5e4a4e0fa505378c72c5f700934ce8333f4e6b1b508886c4b0eb14f4be99`:

   ```sh
   $ openssl dgst -sha256 dst-root-ca-x3.pem
   SHA256(dst-root-ca-x3.pem)= 139a5e4a4e0fa505378c72c5f700934ce8333f4e6b1b508886c4b0eb14f4be99
   ```

     - If you'd like further verification that this "DST Root CA X3" certificate is part of most trusted root stores, you can find the "DST Root CA X3" certificate, with the same contents, at <https://curl.haxx.se/ca/cacert.pem> (this file is extracted from Mozilla Firefox's trusted certificates).
3. Find the `JAVA_HOME` environment variable on your system. This may already be set, or you may need to [find it](http://stackoverflow.com/a/20653441) and set it.
4. Add the `dst-root-ca-x3.pem` root certificate to the JVM keystore:

   ```sh
   $ sudo keytool -trustcacerts -keystore $JAVA_HOME/jre/lib/security/cacerts \
       -storepass changeit -noprompt -importcert -alias dst-root-ca-x3 \
       -file dst-root-ca-x3.pem
   ```
