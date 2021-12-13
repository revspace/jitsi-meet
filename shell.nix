{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell rec {
	buildInputs = let 
		unstable = import <nixos-unstable> {};
	in [
		(unstable.yarn.override { nodejs = unstable.nodejs-16_x; })
     		unstable.nodejs-16_x
		unstable.nodePackages.webpack
		unstable.nodePackages.webpack-cli
	];
#	shellHook = ''
#		alias webpack=webpack-cli
#	'';
}
